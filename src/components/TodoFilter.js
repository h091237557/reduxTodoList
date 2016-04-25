import React                    from 'react';
import VisibleState             from './VisibleState';

const Header = () => {
  return (
    <div className="nav">
      <ul className="clearfix">
        <VisibleState filter='SHOW_ALL'>
          All
        </VisibleState>
        <VisibleState filter='SHOW_STAR'>
          Starred
        </VisibleState>
        <VisibleState filter='SHOW_ACTIVE'>
          Active
        </VisibleState>
        <VisibleState filter='SHOW_COMPLETE'>
          Complete
        </VisibleState>
      </ul>
    </div>
  );
};


export default Header;

