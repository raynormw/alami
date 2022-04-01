import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { base_url } from 'services/api';
import Homepage from 'routes/Homepage';
import AddSeller from 'routes/AddSeller';
import AddProduct from 'routes/AddProduct';
import ListProduct from 'routes/ListProduct';
import SearchProduct from 'routes/SearchProduct';
import NoMatch from 'routes/NoMatch';

export default class Navigation extends Component {
  render() {
    return (
        <BrowserRouter basename={base_url}>
          <Routes>
            <Route path="/" element={<Homepage />} />
              <Route path="addseller" element={<AddSeller />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="listproduct" element={<ListProduct />} />
              <Route path="searchproduct" element={<SearchProduct />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
    );
  }
}
