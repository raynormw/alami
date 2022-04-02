import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export default class Homepage extends Component {
  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Welcome</p>
        </div>
      </main>
    );
  }
}
