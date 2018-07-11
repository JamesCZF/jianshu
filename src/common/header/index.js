import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  handleFocus() {
    this.setState ({
      focused: true
    })
  }
  
  handleBlur() {
    this.setState ({
      focused: false
    })
  }

	render() {
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
              in={this.state.focused}
              timeout = {200}
              classNames = "fade"
            >
          		<NavSearch
                className = {this.state.focused ? 'focused' : ''}
                onFocus = {this.handleFocus}
                onBlur = {this.handleBlur}
              > 
              </NavSearch>
            </CSSTransition>
            <i className = {this.state.focused ? 'focused iconfont' : 'iconfont'}>
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
}

export default Header;