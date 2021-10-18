import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';

import Product from '@Component/Product';
import { fetchOneProduct } from '@Slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { addToCart } from '@Slice/cartSlice';
import { getInfoPageByName } from '@Slice/selector';

import { feature, listButton, listButtonNav, relatedList } from './constants';
import classes from './ProductPage.module.scss';

const ProductPage: React.FC = () => {
  // Hook states
  const location = useLocation();
  const name = location.pathname.split('/')[2];
  const infoPage = useAppSelector(getInfoPageByName(name));
  const [navIndex, setNavIndex] = useState<number>(1);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [isImage1, setIsImage1] = useState<boolean>(true);
  // Hook effects
  useEffect(() => {
    if (!infoPage) dispatch(fetchOneProduct(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Action handlers
  const handleClick = (): void => {
    setIsOpenSnackBar(true);
  };

  const handleClose = useCallback(() => {
    setIsOpenSnackBar(false);
  }, []);

  const addHandle = (): void => {
    if (infoPage.id) {
      handleClick();
      dispatch(addToCart({ id: infoPage.id }));
    }
  };

  return (
    <div className={classes.productContainer}>
      <div className={classes.header}>
        <div className={classes.image}>
          <img src={isImage1 ? infoPage.image1 : infoPage.image2} alt="image1" />
        </div>
        <div className={classes.description}>
          <div className={classes.title}>{infoPage?.title}</div>
          <div className={classes.categories}>{`categories: ${infoPage?.categories.join(' ')}`}</div>
          <div className={classes.availability}>{`availability:${80} in stock`}</div>
          <div className={classes.desc}>
            <ul>
              {infoPage?.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={classes.price}>
            <span className={classes.oldPrice}>{infoPage?.oldPrice}</span>
            <span className={classes.newPrice}>{infoPage?.price}</span>
            <input className={classes.amount} type="number" name="amout" id="amout" min={1} defaultValue={1} />
            <button className={classes.add} type="button" onClick={addHandle}>
              add to cart
            </button>
          </div>

          <div className={classes.listButton}>
            {listButton.map(({ title, icon, id }) => (
              <button type="button" key={id}>
                <div className={classes.icon}>{icon}</div>
                <div className={classes.textIcon}>{title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.imageBottom}>
        <div className={classes.left}>
          <button
            type="button"
            className={classes.circle}
            onClick={() => {
              setIsImage1(true);
            }}
          >
            <img src={infoPage?.image1} alt="" />
          </button>
          <button
            type="button"
            className={classes.circle}
            onClick={() => {
              setIsImage1(false);
            }}
          >
            <img src={infoPage?.image2} alt="" />
          </button>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.nav}>
          {listButtonNav.map(({ id, title }) => (
            <button
              type="button"
              key={id}
              className={id === navIndex ? classes.active : undefined}
              onClick={() => {
                setNavIndex(id);
              }}
            >
              {title}
            </button>
          ))}
        </div>

        <div className={classes.bodyDesc}>
          <div className={classes.center}>
            <div className={classes.titleDesc}>Description</div>
            <div className={classes.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur necessitatibus magnam? Nam
              dolore libero quasi sapiente rerum consequatur maxime quas sequi! Recusandae harum omnis maxime aperiam
              illum, aspernatur dolorum!
            </div>

            <div className={classes.mainFeature}>
              <div className={classes.main}>Main feature</div>
              <div className={classes.table}>
                {feature.map(({ id, content, featureName }) => (
                  <div className={classes.row} key={id}>
                    <div className={classes.col}>{featureName}</div>
                    <div className={classes.col}>{content}</div>
                  </div>
                ))}
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
                <Product id={id} {...rest} />
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
                <Product id={id} {...rest} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.snackbar}>
        <Snackbar
          style={{ width: '10rem' }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isOpenSnackBar}
          onClose={handleClose}
          message="Added to cart"
          autoHideDuration={2000}
        />
      </div>
    </div>
  );
};

ProductPage.defaultProps = {};
export default ProductPage;
