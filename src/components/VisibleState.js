import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';
import { push }                             from 'react-router-redux';
import classNames                           from 'classnames';

class VisibleState extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handleClick() {
      this.props.SetVisibleTodo(this.props.filter);
      this.props.redirect(this.props.children);
    }

    render() {
        return (
          <li className="nav-item">
            <a className={classNames({ 'active': this.props.active })} href="javascript:" onClick={this.handleClick.bind(this)}><span>{this.props.children}</span></a>
          </li>
        )
    }
}

export default connect(
                    (state,ownProps) => {
                      return {
                        active: state.visible===ownProps.filter
                      };
                    },
                    (dispatch) => {
                      return {
                        ...bindActionCreators(TodoAction, dispatch),
                        redirect (path) {
                          dispatch(push('#/'+path));
                          // if (process.env.NODE_ENV === 'production') {
                          //   dispatch(push(location+'#/'+path));
                          // } else {
                          //   dispatch(push(path));
                          // }
                        }
                      }
                    }
                )(VisibleState);
