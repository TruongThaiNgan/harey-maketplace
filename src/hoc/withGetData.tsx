import classNames from 'classnames';
import queryString from 'query-string';
import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import Banner from '@Component/Banner';
import Product from '@Component/Product';
import SideBar from '@Component/SideBar';
import ToolBar from '@Component/ToolBar';
import { getPage } from '@Service/product';
import { TypePage } from '@Slice/interfaces';
import { fetchPage } from '@Slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { getNumberProduct, getPageData, getPageProductStatus } from '@Slice/selector';

import { ProductItem } from './interfaces';
import classes from './withGetData.module.scss';

const withGetData = (type: TypePage): React.ReactNode => {
  const PageLoad: React.FC = () => {
    // Hook states
    const history = useHistory();
    const location = useLocation();
    const queries = queryString.parse(location.search);
    const [page, setPage] = useState<number>(+queries.page! || 1);
    const [limit, setLimit] = useState<number>(+queries.limit! || 5);
    const totalProduct: number = useAppSelector(getNumberProduct(type));
    const totalPage = Math.floor((+totalProduct - 1) / limit) + 1;

    const data: ProductItem[] = useAppSelector(getPageData({ page, limit, type }), shallowEqual);
    const dispatch = useAppDispatch();
    const status = useAppSelector(getPageProductStatus);
    // Hook effects
    useEffect(() => {
      const getAPI = getPage(type);
      dispatch(fetchPage({ page, limit, type, getAPI }));
    }, [dispatch, limit, page]);

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
        <div className={classes.sideBar}>
          <SideBar />
        </div>
        <div className={classes.displayBar}>
          <Banner />
          <div className={classes.toolBar} />
          <ToolBar onChangeLimit={setLimit} limit={limit} />
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
  return <PageLoad />;
};

export default withGetData;
