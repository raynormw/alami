import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { base_url } from 'services/api';
import Homepage from 'pages/Homepage';
import AddSeller from 'pages/AddSeller';
import NoMatch from 'pages/NoMatch';

export default class Navigation extends Component {
  render() {
    return (
        <BrowserRouter basename={base_url}>
          <Routes>
            <Route path="/" element={<Homepage />} />
              <Route path="addseller" element={<AddSeller />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
    );
  }
}
