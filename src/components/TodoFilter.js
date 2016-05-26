import React                    from 'react';
import VisibleState             from './VisibleState';

const Nav = (props) => {
  const showAll = () => {
    props.SetVisibleTodo('SHOW_ALL');
  };
  const showStart = () => {
    props.SetVisibleTodo('SHOW_ALL');
  };
  const showActive = () => {
    props.SetVisibleTodo('SHOW_ALL');
  };
  const showCom = () => {
    props.SetVisibleTodo('SHOW_ALL');
  };

  return (
    <nav className="nav">
      <ul className="clearfix">
        <VisibleState {...props} onClick={ () => showAll() } filter='SHOW_ALL' >
          All
        </VisibleState>
        <VisibleState {...props} onClick={ () => showStart() } filter='SHOW_STAR'>
          Starred
        </VisibleState>
        <VisibleState {...props} onClick={ () => showActive() } filter='SHOW_ACTIVE'>
          Active
        </VisibleState>
        <VisibleState {...props} onClick={ () => showCom() } filter='SHOW_COMPLETE'>
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
