import React from 'react';

import TableMenu from '@Component/TableMenu';

import { elementList } from './constants';
import classes from './ElementsMenu.module.scss';
import { ElementsMenuProps } from './interfaces';

const ElementsMenu: React.FC<ElementsMenuProps> = ({ style }) => (
  <div className={classes.elementsMenuContainer} style={style}>
    {elementList.map((element) => (
      <div className={classes.element} key={element.title}>
        <TableMenu list={element} />
      </div>
    ))}
    <div className={classes.element}>
      <div className={classes.image}>Image</div>
    </div>
  </div>
);
ElementsMenu.defaultProps = {};
export default React.memo(ElementsMenu);
