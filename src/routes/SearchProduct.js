import React, { Component } from 'react';
import { Breadcrumb, Table, Input } from 'antd';

import { dataSource, columns } from 'utils/dummy';

const { Search } = Input;

export default class SearchProduct extends Component {

  handleSearch = (e) => {
    console.log(e, 'event');
  }

  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Cari Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Cari Produk</p>
          <Search
            className="search-product"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={this.handleSearch}
          />
          <Table className="table--product" dataSource={dataSource} columns={columns} />
        </div>
      </main>
    );
  }
}
