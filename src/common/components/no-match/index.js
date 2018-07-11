import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const NoMatch = () => {
  return (
    <div className="no-match-page">
      404，哎呦，迷路了。
      <div className="btn-container">
        <Link to="/">回到首页</Link>
      </div>
    </div>
  )
};

export default NoMatch;
