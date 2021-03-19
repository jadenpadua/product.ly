import React from 'react';
import { Note } from '../Note/Note';
import './styles.less';
const Card = (): any => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="invis"></div>
          <div className="title">
            <h1>Product.ly</h1>
          </div>
          <div className="ellipsis">
            <span className="iconify" data-icon="fa-solid:ellipsis-h" data-inline="false"></span>
          </div>
        </div>
        <div className="todos">
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
};

export { Card };
