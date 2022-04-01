import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class AddProduct extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Add Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Add Product</div>
      </main>
    );
  }
}
