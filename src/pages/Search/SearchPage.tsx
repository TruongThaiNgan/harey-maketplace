import { CircularProgress } from '@material-ui/core';
import classNames from 'classnames';
import queryString from 'query-string';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

import axios from '@Service/axios';
import ShopWrapper from '@Component/ShopWrapper';
import Product from '@Component/Product';
import { ProductItem } from '@Component/PageLoad/interfaces';

import classes from './SearchPage.module.scss';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const queries = queryString.parse(location.search);
  const [key] = useState<string>((queries.key as string) || '');
  const [page, setPage] = useState<number>(+queries.page! || 1);
  const [limit, setLimit] = useState<number>(+queries.limit! || 5);
  const [sort, setSort] = useState<string>('toolBar.default');
  const [data, setData] = useState<ProductItem[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
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
    axios
      .get('/shop/searchAll', {
        params: {
          key,
          limit,
          page,
        },
      })
      .then((res) => {
        setData(res.data.listSearch);
        setTotalPage(Math.floor((+res.data.numberProduct - 1) / limit) + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [key, limit, page]);
  return (
    <div className={classes.searchPageContainer}>
      <ShopWrapper limit={limit} setLimit={setLimit} sort={sort} setSort={setSort}>
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
      </ShopWrapper>
    </div>
  );
};

SearchPage.defaultProps = {};
export default SearchPage;
