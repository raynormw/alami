import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

import logo from 'assets/ALAMI-logo.webp';

const { Header } = Layout;

export default class BaseHeader extends Component {
  state = {
    selectedKeys: ['0'],
  }

  onClick = (e) => {
    if (e.key === "1") {
      this.setState({ selectedKeys: ['0'] });
    } else {
      this.setState({ selectedKeys: [e.key] });
    }
  }

  render() {
    return (
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          onClick={this.onClick}
          selectedKeys={this.state.selectedKeys}
        >
          <Menu.Item key="1">
            <Link to="/">
              <img className="logo"src={logo} alt="Logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="addseller">Tambah Penjual</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="addproduct">Tambah Produk</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="listproduct">Daftar Produk</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="listseller">Daftar Seller</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="searchproduct">Cari Produk</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="searchseller">Cari Seller</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
