import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

import logo from 'assets/ALAMI-logo.webp';

const { Header } = Layout;

export default class BaseHeader extends Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} selectedKeys="0">
          <Menu.Item>
            <Link to="/">
              <img className="logo"src={logo} alt="Logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="addseller">Tambah Penjual</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="addproduct">Tambah Produk</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="listproduct">Daftar Produk</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="searchproduct">Cari Produk</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
