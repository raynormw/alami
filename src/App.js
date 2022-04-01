import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter, Routes, Route , Outlet } from 'react-router-dom';

import { base_url } from 'services/api';
import Homepage from 'routes/Homepage';
import AddSeller from 'routes/AddSeller';
import AddProduct from 'routes/AddProduct';
import ListProduct from 'routes/ListProduct';
import SearchProduct from 'routes/SearchProduct';
import NoMatch from 'routes/NoMatch';
import Store from 'stores/index';
// import Navigation from 'Navigation';
import BaseHeader from 'layouts/BaseHeader';
const { Content, Footer } = Layout;


// const App = () => {
//   return (
//     <Provider store={Store}>
//       <Navigation />
//     </Provider>
//   );
// }

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter basename={base_url}>
          <Layout>
            <BaseHeader />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
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
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
