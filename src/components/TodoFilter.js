import React                    from 'react';
import VisibleState             from './VisibleState';

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul className="clearfix">
        <VisibleState {...props} onClick={ (visibleState) => props.switchVisible(visibleState) } filter='SHOW_ALL' >
          All
        </VisibleState>
        <VisibleState {...props} onClick={ (visibleState) => props.switchVisible(visibleState)  } filter='SHOW_STAR'>
          Starred
        </VisibleState>
        <VisibleState {...props} onClick={ (visibleState) => props.switchVisible(visibleState)  } filter='SHOW_ACTIVE'>
          Active
        </VisibleState>
        <VisibleState {...props} onClick={ (visibleState) => props.switchVisible(visibleState)  } filter='SHOW_COMPLETE'>
          Complete
        </VisibleState>
      </ul>
    </nav>
  );
};


export default Nav;

  // return (
  //   <nav className="nav">
  //     <ul className="clearfix">
  //       <VisibleState {...props} filter='SHOW_ALL' >
  //         All
  //       </VisibleState>
  //       <VisibleState {...props} filter='SHOW_STAR'>
  //         Starred
  //       </VisibleState>
  //       <VisibleState {...props} filter='SHOW_ACTIVE'>
  //         Active
  //       </VisibleState>
  //       <VisibleState {...props} filter='SHOW_COMPLETE'>
  //         Complete
  //       </VisibleState>
  //     </ul>
  //   </nav>
  // );
