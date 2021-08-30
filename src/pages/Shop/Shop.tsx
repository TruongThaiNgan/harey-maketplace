import React, { useEffect, useState } from 'react';

import Banner from '@Component/Banner/Banner';
import Product from '@Component/Product/Product';
import SideBar from '@Component/SideBar/SideBar';
import ToolBar from '@Component/ToolBar/ToolBar';
import useGetProductQuery from '@Query/useGetProductQuery';

import classes from './Shop.module.scss';
import { ShopProps, ProductItem } from './interfaces';

const Shop: React.FC<ShopProps> = () => {
  const [listProduct, setlistProduct] = useState<ProductItem[]>();

  const { isLoading, refetch } = useGetProductQuery('repoData', {
    onSuccess: ({ data }) => {
      setlistProduct(data.productList);
    },
    enabled: false,
  });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.body}>
      <div className={classes.sideBar}>
        <SideBar />
      </div>
      <div className={classes.displayBar}>
        <Banner />
        <div className={classes.toolBar} />
        <ToolBar />
        <div className={classes.listProduct}>
          {isLoading ? <div>loading</div> : listProduct?.map(({ id, ...rest }) => <Product key={`${id}`} {...rest} />)}
        </div>
      </div>
    </div>
  );
};

Shop.defaultProps = {};
export default Shop;
