import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route , Outlet } from 'react-router-dom';

import { base_url } from 'services/api';
import Homepage from 'routes/Homepage';
import AddSeller from 'routes/AddSeller';
import AddProduct from 'routes/AddProduct';
import ListProduct from 'routes/ListProduct';
import SearchProduct from 'routes/SearchProduct';
import NoMatch from 'routes/NoMatch';
import Store from 'stores/index';
import BaseHeader from 'layouts/BaseHeader';
const { Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter basename={base_url}>
          <Layout>
            <BaseHeader />
            <Content className="site-layout content-container">
              <Outlet />
              <Routes>
                <Route path="/" element={<Homepage />} />
                  <Route path="addseller" element={<AddSeller />} />
                  <Route path="addproduct" element={<AddProduct />} />
                  <Route path="listproduct" element={<ListProduct />} />
                  <Route path="searchproduct" element={<SearchProduct />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Content>
            <Footer className="footer">Ant Design ©2022 Created by Tirta WP</Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
