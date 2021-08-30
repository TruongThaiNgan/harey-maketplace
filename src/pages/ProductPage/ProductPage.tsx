import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import React, { useEffect } from 'react';

import Product from '@Component/Product';
import axios from '@Service/axios';

import classes from './ProductPage.module.scss';

const relatedList = [
  {
    id: 1,
    title: 'AA Headphones pods',
    oldPrice: '$175.00',
    price: '$149.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/79983-airpods-angle-ipod-touch-tap-macbook_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-599x599-270x270.jpg',
  },
  {
    id: 2,
    title: 'AA Laptop Air',
    oldPrice: '$899.00',
    price: '$849.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/mcbook-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/macbook-1-799x799-270x270.png',
  },
  {
    id: 3,
    title: 'AA Qled TV 4k',
    price: '$1,499.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/archidey-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/shivaki-left-799x799-270x270.jpg',
  },
  {
    id: 4,
    title: 'AA Smartphone XS',
    oldPrice: '$1,100.00',
    price: '$1,059.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-gols-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-silver-1-599x599-270x270.png',
  },
  {
    id: 5,
    title: 'AAA Smartphone 10 LTE',
    price: '$899.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ezgif-1-e15eba69f90a-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ezgif-1-930149de5303-995x661-270x270.png',
  },
];
const productInfo = {
  title: 'AA Headphones pods',
  categories: ['ACCESSORIES', 'GADGETS', 'HEADPHONE'],
  availability: 87,
  description: [
    'Automatically on, automatically connected',
    'Easy setup for all your Apple devices',
    'Quick access to Siri by saying "Hey Siri"',
    'Double-tap to play or skip forward',
    'Charges quickly in the case',
    'Premium sound 3D',
    'Elegant Design',
  ],
  oldPrice: '$175.00',
  newPrice: '$149.00',
  image1:
    'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/79983-airpods-angle-ipod-touch-tap-macbook_600x600-599x599.png',
  image2:
    'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-599x599.jpg',
};
const ProductPage: React.FC = () => {
  // Hook states

  // Hook effects
  useEffect(() => {
    axios
      .get('/shop/product/s')
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  // Constants

  // Action handlers

  // Renderers

  return (
    <div className={classes.productContainer}>
      <div className={classes.header}>
        <div className={classes.image}>
          <img src={productInfo.image1} alt="image1" />
        </div>
        <div className={classes.description}>
          <div className={classes.title}>{productInfo.title}</div>
          <div className={classes.categories}>{`categories: ${productInfo.categories.join(' ')}`}</div>
          <div className={classes.availability}>{`availability:${productInfo.availability} in stock`}</div>
          <div className={classes.desc}>
            <ul>
              {productInfo.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={classes.price}>
            <span className={classes.oldPrice}>{productInfo.oldPrice}</span>
            <span className={classes.newPrice}>{productInfo.newPrice}</span>
            <input className={classes.amount} type="number" name="amout" id="amout" min={1} defaultValue={1} />
            <button className={classes.add} type="button">
              add to cart
            </button>
          </div>
          <div className={classes.listButton}>
            <button type="button">
              <div className={classes.icon}>
                <ShuffleIcon />
              </div>
              <div className={classes.textIcon}>compare</div>
            </button>
            <button type="button">
              <div className={classes.icon}>
                <FavoriteBorderOutlinedIcon />
              </div>
              <div className={classes.textIcon}>add to wishlist</div>
            </button>
            <button type="button">
              <div className={classes.icon}>
                <ShareOutlinedIcon />
              </div>
              <div className={classes.textIcon}>share</div>
            </button>
          </div>
        </div>
      </div>

      <div className={classes.imageBottom}>
        <div className={classes.left}>
          <div className={classes.circle}>
            <img src={productInfo.image1} alt="" />
          </div>
          <div className={classes.circle}>
            <img src={productInfo.image2} alt="" />
          </div>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.nav}>
          <button type="button" className={classes.active}>
            description
          </button>
          <button type="button">accessories</button>
          <button type="button">additional information</button>
          <button type="button">reviews</button>
          <button type="button">vendor info</button>
          <button type="button">more product</button>
        </div>
        <div className={classes.bodyDesc}>
          <div className={classes.center}>
            <div className={classes.titleDesc}>Description</div>
            <div className={classes.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur necessitatibus magnam? Nam
              dolore libero quasi sapiente rerum consequatur maxime quas sequi! Recusandae harum omnis maxime aperiam
              illum, aspernatur dolorum!
            </div>
            <div className={classes.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur necessitatibus magnam? Nam
              dolore libero quasi sapiente rerum consequatur maxime quas sequi! Recusandae harum omnis maxime aperiam
              illum, aspernatur dolorum!
            </div>
            <div className={classes.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur necessitatibus magnam? Nam
              dolore libero quasi sapiente rerum consequatur maxime quas sequi! Recusandae harum omnis maxime aperiam
              illum, aspernatur dolorum!
            </div>
            <div className={classes.mainFeature}>
              <div className={classes.main}>Main feature</div>
              <div className={classes.table}>
                <div className={classes.row}>
                  <div className={classes.col}>1</div>
                  <div className={classes.col}>1</div>
                </div>
                <div className={classes.row}>
                  <div className={classes.col}>1</div>
                  <div className={classes.col}>1</div>
                </div>
                <div className={classes.row}>
                  <div className={classes.col}>1</div>
                  <div className={classes.col}>1</div>
                </div>
                <div className={classes.row}>
                  <div className={classes.col}>1</div>
                  <div className={classes.col}>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.relatedProduct}>
        <div className={classes.center}>
          <div className={classes.relatedTitle}>
            <span>
              <strong>Related </strong> products
            </span>
          </div>
          <div className={classes.productList}>
            {relatedList.map(({ id, ...rest }) => (
              <div className={classes.item} key={id}>
                <Product {...rest} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.center}>
          <div className={classes.relatedTitle}>
            <span>
              <strong>You may </strong> also like
            </span>
          </div>
          <div className={classes.productList}>
            {relatedList.map(({ id, ...rest }) => (
              <div className={classes.item} key={id}>
                <Product {...rest} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.defaultProps = {};
export default ProductPage;
