// require('../stylesheets/app.scss');
require('../scss/main.scss');
require("font-awesome-webpack");
import React, { Component }   from 'react';
import AddTodo                from './components/AddTodo';
import TodoFilter             from './components/TodoFilter';
import classNames             from 'classnames';
import Main                   from './container/Main';

export class App extends Component {
  todoOffsetTop = null
  fixedheight = null
  fixStyle = {}
  state = {
    setFix:false
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(){
    if(window.pageYOffset >= this.todoOffsetTop){
      this.fixStyle = {'marginTop': this.fixedheight+'px'};
      this.setState({setFix: true});
    }else{
      this.fixStyle = {};
      this.setState({setFix: false});    }
  }

  render() {
    return (
      <section className="wrap">
          <header>
            <p className="logo">
              TODO<span className="logo-comment">beta</span>
            </p>
          </header>
          <Main location={this.props.location}>
            {this.props.children}
          </Main>
      </section>
    );
  }
}

// render() {
//     console.log(this.props.location)
//     return (
//       <section className="index">
//         <div className="l-container">
//           <div className="logo">
//             <p className="logo-title">
//               TODO<span className="logo-comment">beta</span>
//             </p>
//           </div>
//           <div className="index__content"
//                 ref = {node => {
//                   if(node === null) return;
//                   if(this.todoOffsetTop !== null) return;
//                   this.todoOffsetTop = node.getBoundingClientRect().top;
//                 }}>
//               <div className={classNames({ 'fixed': this.state.setFix })}
//                     ref = {node => {
//                         if(node === null) return;
//                         if(this.fixedheight !== null) return;
//                         this.fixedheight = node.clientHeight;
//                     }}>
//                 <TodoFilter />
//                 <AddTodo />
//               </div>
//               <div style={this.fixStyle}>
//                 <TodoList className="asdf"/>
//               </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
