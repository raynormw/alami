import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class ListProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">List Product</div>
      </main>
    );
  }
}
