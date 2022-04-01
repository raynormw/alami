import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class ListProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Daftar Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Daftar Produk</div>
      </main>
    );
  }
}
