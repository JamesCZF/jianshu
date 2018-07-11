import styled from 'styled-components';
import Logopic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${Logopic});
  background-size: contain;
`;

export const Nav = styled.div`
  height: 100%;
  width: 945px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
  	float: left;
  }
  &.right {
  	float: right;
  	color: #969696;
  }

  &.active {
  	color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .fade-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  .fade-enter-active {
    width: 240px;
  }
  .fade-exit {
    transition: all .2s ease-out;
  }
  .fade-exit-active{
    width: 160px;
  }
  .iconfont {
    position:absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #999;
    }
  }
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
  &.focused {
    width: 240px;
  }
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
  	color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 14px;
  &.reg {
  	color: #ec6149;
  }
  &.writting {
  	color: #fff;
  	background: #ec6149
  }
`