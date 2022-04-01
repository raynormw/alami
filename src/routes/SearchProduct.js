import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class SearchProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Search Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Search Product</div>
      </main>
    );
  }
}
