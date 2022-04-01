import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class AddProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Tambah Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Tambah Produk</div>
      </main>
    );
  }
}
