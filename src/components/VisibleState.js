import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';
import { push }                         from 'react-router-redux';

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
          <span>
            <a href="javascript:" onClick={this.handleClick.bind(this)}>{this.props.children}</a>
          </span>
        )
    }
}

export default connect(
                    state => state,
                    (dispatch) => {
                      let location = window.location.pathname;
                      location = (location.slice(-1).indexOf('/') !== -1) ? location : location + '/';
                      return {
                        ...bindActionCreators(TodoAction, dispatch),
                        redirect (path) { dispatch(push(location+'#/'+path));}
                      }
                    }
                )(VisibleState);
