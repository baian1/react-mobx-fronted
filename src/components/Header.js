import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      className="header"
    >
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/areas">
        <Link to="/areas"><Icon type="bars" />区域列表</Link>
      </Menu.Item>
      <Menu.Item key="/roles">
        <Link to="/roles"><Icon type="bars" />Roles</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
