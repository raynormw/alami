import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';

import BaseHeader from 'layouts/BaseHeader';
const { Content, Footer } = Layout;

export default class Homepage extends Component {
  render() {
    return (
      <main>
        <h2>Welcome</h2>
      </main>
    );
  }
}
