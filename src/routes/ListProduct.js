import React, { Component } from 'react';
import { Breadcrumb, Table } from 'antd';

import { dataSource, columns } from 'utils/dummy';

export default class ListProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Daftar Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Daftar Produk</p>
          <Table className="table--product" dataSource={dataSource} columns={columns} />;
        </div>
      </main>
    );
  }
}
