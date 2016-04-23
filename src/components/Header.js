import React                    from 'react';
import VisibleState             from './VisibleState';

const Header = () => {
  return (
    <p>
      SHOW:
      {' '}
      <VisibleState filter='SHOW_ALL'>
        All
      </VisibleState>
      {' '}
      <VisibleState filter='SHOW_STAR'>
        Starred
      </VisibleState>
      {' '}
      <VisibleState filter='SHOW_ACTIVE'>
        Active
      </VisibleState>
      {' '}
      <VisibleState filter='SHOW_COMPLETE'>
        Complete
      </VisibleState>
    </p>
  );
};


export default Header;

