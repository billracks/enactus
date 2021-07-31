import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  wrapperStyle,
  titleStyle,
  subTitleStyle,
  componentStyle,
  boxStyle,
  titleWrapperStyle,
  thumbnailWrapperStyle,
  componentTitleStyle,
  UIComponentStyle,
  descWrapperStyle,
  linkWrapperStyle,
  linkStyle,
  logoutBtn
} from "./style";

import * as actions from '../../store/action';

import CometChatUI from "./resources/CometChatUI.png";
import Component from "./resources/components.png"; 
import listComponent from "./resources/wall.png";

class HomePage extends React.Component {

  render() {

    let authRedirect = null;
    if (!this.props.isLoggedIn) {
      authRedirect = <Redirect to="/login" />
    }

    return (
        <div css={wrapperStyle()}>
          {authRedirect}
          <p css={titleStyle()}>Enactus Project Rooms & Virtual Meetings</p>
          <p css={subTitleStyle()}>Choose Platform</p>          

          <div css={UIComponentStyle()}>
            <div css={boxStyle()}>
              <div css={titleWrapperStyle()}>
                <div css={thumbnailWrapperStyle}><img src={CometChatUI} alt="CometChatUI" /></div>
                <h2 css={componentTitleStyle()}>Projects & Virtual Room</h2>
              </div>
              <div css={descWrapperStyle()}>
              
              </div>
              <ul css={linkWrapperStyle()}>
                <li><Link css={linkStyle()} to="/embedded-app">Launch</Link></li>
              </ul>
            </div>

            <div css={boxStyle()}>
              <div css={titleWrapperStyle()}>
                <div css={thumbnailWrapperStyle}><img src={Component} alt="Groups" /></div>
                <h2 css={componentTitleStyle()}>Projects Room</h2>
              </div>
              <div css={descWrapperStyle()}>
            
              </div>
              <ul css={linkWrapperStyle()}>
              <li><Link css={linkStyle()} to="/groups">Launch</Link></li>
              </ul>
            </div>

          </div>

        

        <div css={logoutBtn()}><button type="button" onClick={this.props.onLogout}>Logout</button></div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( HomePage );
