import React from 'react';

import { TableMenuProps } from './interfaces';
import classes from './TableMenu.module.scss';

const TableMenu: React.FC<TableMenuProps> = ({ list }) => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers
  const { title, body } = list;
  return (
    <div className={classes.tableMenuContainer}>
      <div className={classes.title}>{title}</div>
      <div className={classes.seperate} />
      <div className={classes.list}>
        {body.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </div>
  );
};

TableMenu.defaultProps = {};
export default TableMenu;
