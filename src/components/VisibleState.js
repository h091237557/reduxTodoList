import React, { Component, PropTypes }      from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators }               from 'redux';
import * as TodoAction                      from '../actions/';
import { push, routerActions, replace }                             from 'react-router-redux';
import classNames                           from 'classnames';

class VisibleState extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handleClick() {
      this.props.onClick(this.props.filter);
      this.props.redirect(this.props.children);
    }

    render() {
        return (
          <li className="nav-item">
            <a className={classNames({ 'active': (this.props.filter === this.props.visible) })}
                href="javascript:"
                onClick={this.handleClick.bind(this)}>
                  <span>{this.props.children}</span>
            </a>
          </li>
        )
    }
}

export default VisibleState;
