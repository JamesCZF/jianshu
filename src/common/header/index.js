import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
  SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style.js';

function Header(props) {
		return (
      <HeaderWrapper>
      	<Logo href='/'/>
      	<Nav>
      		<NavItem className="left active">首页</NavItem>
      		<NavItem className="left">下载APP</NavItem>
      		<NavItem className="right">登录</NavItem>
      		<NavItem className="right">
            <i className="iconfont">&#xe636;</i>            
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout = {200}
              classNames = "fade"
            >
          		<NavSearch
                className = {props.focused ? 'focused' : ''}
                onFocus = {props.handleFocus}
                onBlur = {props.handleBlur}
              > 
              </NavSearch>
            </CSSTransition>
            <i className = {props.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe62b;
            </i>
          </SearchWrapper>
      	</Nav>
      	<Addition>
      		<Button className="reg">注册</Button>
      		<Button className="writting">
            <i className="iconfont">&#xe61b;</i>
            写文章
          </Button>
      	</Addition>
      </HeaderWrapper>
		)
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);