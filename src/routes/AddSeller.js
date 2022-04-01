import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class AddSeller extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Add Seller</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Add Seller</div>
      </main>
    );
  }
}
