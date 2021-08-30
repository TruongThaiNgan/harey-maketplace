import React from 'react';

import ButtonShop from '@Component/ButtonShop';
import Category from '@Component/Category/Category';

import { ReviewSectionProps } from './interfaces';
import classes from './ReviewSection.module.scss';

const ReviewSection: React.FC<ReviewSectionProps> = () => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.reviewSectionContainer}>
    <div className={classes.center}>
      <div className={classes.category}>
        <div className={classes.sideBar}>
          <Category />
        </div>

        <div className={classes.banner}>
          <div className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <div className={classes.subTitle}>Do even more</div>
            <h1 className={classes.title}>The world&apos;s first infinity phone</h1>
            <div className={classes.content}>
              The expansive display streches from edge to edge, giving you the most amount of creen in the least amount
              of space
            </div>
          </div>
        </div>
      </div>

      <div className={classes.imageList}>
        <div className={classes.image}>
          <div className={classes.image1}>
            <div className={classes.title}>Keytar blue bottle</div>
            <div className={classes.content}>
              Cardigan lyft ennui listicle bespoke, pitchfork cloud bread subway tile disrupt quinoa gluten-free
              slow-carb
            </div>
            <div className={classes.button}>
              <ButtonShop />
            </div>
          </div>
        </div>

        <div className={classes.image}>
          <div className={classes.image2}>
            <div className={classes.title}>Truffault gluten-free</div>
            <div className={classes.content}>
              Organic cardigan flannel four dollar toast salvia dreamcatcher subway tile aesthetic kale chips.
            </div>
            <div className={classes.button}>
              <ButtonShop />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
ReviewSection.defaultProps = {};
export default ReviewSection;
