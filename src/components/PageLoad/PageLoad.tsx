import { CircularProgress } from '@material-ui/core';
import classNames from 'classnames';
import React, { useCallback, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Product from '@Component/Product';
import { getPage } from '@Service/product';
import { fetchPage } from '@Slice/pageSlice';
import { getNumberProduct, getPageData, getPageProductStatus } from '@Slice/selector';
import { useAppDispatch, useAppSelector } from '@Store/hooks';

import { PageLoadProps, ProductItem } from './interfaces';
import classes from './PageLoad.module.scss';

const PageLoad: React.FC<PageLoadProps> = ({ type, limit, page, sort, setPage }) => {
  // Hook states
  const history = useHistory();
  const location = useLocation();
  const totalProduct: number = useAppSelector(getNumberProduct(type));
  const totalPage = Math.floor((+totalProduct - 1) / limit) + 1;

  const data: ProductItem[] = useAppSelector(getPageData({ page, limit, type }), shallowEqual);
  const dispatch = useAppDispatch();
  const status = useAppSelector(getPageProductStatus);
  // Hook effects
  useEffect(() => {
    const getAPI = getPage(type);
    dispatch(fetchPage({ page, limit, sort, type, getAPI }));
  }, [dispatch, limit, page, sort, type]);

  const updateLink = useCallback(
    (pageIndex: number): void => {
      history.push({
        pathname: location.pathname,
        search: `?page=${pageIndex}&&limit=${limit}`,
      });
    },
    [history, limit, location.pathname],
  );

  useEffect(() => {
    if (page > totalPage) {
      updateLink(1);
      setPage(1);
    } else {
      updateLink(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, updateLink]);
  return (
    <div className={classes.shopContainer}>
      <div className={classes.displayBar}>
        <div className={classes.listProduct}>
          {status === 'loading' ? (
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          ) : (
            data.length !== 0 &&
            data?.map(({ id, ...rest }) => (
              <div className={classes.productContainer} key={id}>
                <Product id={id} {...rest} />
              </div>
            ))
          )}
        </div>
        <div className={classes.page}>
          <button
            type="button"
            disabled={page === 1}
            className={classes.buttonPage}
            onClick={() => {
              if (page > 1) {
                updateLink(page - 1);
                setPage((prePage) => prePage - 1);
              }
            }}
          >
            {'<'}
          </button>
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((pageIndex) => (
            <button
              className={classNames(classes.buttonPage, pageIndex === page ? classes.activePage : undefined)}
              key={pageIndex}
              type="button"
              onClick={() => {
                updateLink(pageIndex);
                setPage(pageIndex);
              }}
            >
              {pageIndex}
            </button>
          ))}
          <button
            className={classes.buttonPage}
            type="button"
            disabled={page === totalPage}
            onClick={() => {
              if (page < totalPage) {
                updateLink(page + 1);
                setPage((prePage) => prePage + 1);
              }
            }}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PageLoad;
