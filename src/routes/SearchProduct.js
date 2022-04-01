import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class SearchProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Cari Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Cari Produk</div>
      </main>
    );
  }
}
