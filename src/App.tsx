import React from 'react';

import Banner from '@Component/Banner/Banner';
import Footer from '@Component/Footer/Footer';
import Header from '@Component/Header/Header';
import Product from '@Component/Product/Product';
import SideBar from '@Component/SideBar/SideBar';
import ToolBar from '@Component/ToolBar/ToolBar';

import classes from './App.module.scss';

const listProduct = [
  {
    id: 1,
    title: 'AA Laptop Air',
    price: '$849.00',
    originImage: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/mcbook-270x270.png',
    hoverImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/macbook-1-799x799-270x270.png',
    isSale: true,
  },
  {
    id: 2,
    title: 'AB Laptop 15.6″ Universe',
    price: '$799.00',
    originImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/HUAWEI-MateBook-270x270.png',
    hoverImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/LAPTOPMAC-799x799-270x270.png',
    isSale: true,
  },
  {
    id: 3,
    title: 'Audio System 30W 1-2',
    price: '$199.00',
    originImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51543-4-multimedia-speaker-png-free-photo_600x600-527x527.png',
    hoverImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51634-2-multimedia-speaker-images-png-file-hd_600x600-599x599-270x270.png',
    isSale: true,
  },
  {
    id: 4,
    title: 'Audio System 55W 1-2',
    price: '$59.00',
    originImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51621-5-multimedia-speaker-png-file-hd_600x600-270x270.png',
    hoverImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51527-5-multimedia-speaker-free-hd-image_600x600-599x599-270x270.png',
    isSale: true,
  },
  {
    id: 5,
    title: 'Audio System 65W Ultra Bass',
    price: '$199.00',
    originImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51527-5-multimedia-speaker-free-hd-image_600x600-270x270.png',
    hoverImage:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51621-5-multimedia-speaker-png-file-hd_600x600-599x599-270x270.png',
    isSale: true,
  },
];

function App(): JSX.Element {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.content}>
        <div className={classes.body}>
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <div className={classes.displayBar}>
            <Banner />
            <div className={classes.toolBar} />
            <ToolBar />
            <div className={classes.listProduct}>
              {listProduct.map(({ id, ...rest }) => (
                <Product key={`${id}`} {...rest} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
