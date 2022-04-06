import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Table,
  Input,
} from 'antd';

import { searchProduct, handleVisibleProduct } from 'actions/productAction';
import { dataSource, columns } from 'utils/dummy';

const { Search } = Input;

class SearchProduct extends Component {

  handleSearch = (value) => {
    if (!value) {
      const data = {
        isVisible: false,
        isVisibleList: false,
        isVisibleSearch: true,
        isError: true,
        errorMessage: "Keyword masih kosong!"
      }

      this.props.handleVisibleProduct(data);
    } else {
      this.props.searchProduct(value);
    }
  }

  handleClose = () => {
    const data = {
      isVisible: false,
      isVisibleList: false,
      isVisibleSearch: false,
      isError: false,
      errorMessage: ""
    }

    this.props.handleVisibleProduct(data);
  }


  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Cari Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Cari Produk</p>
          <Search
            className="search-product"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={this.handleSearch}
          />
          <Table className="table--product" dataSource={dataSource} columns={columns} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  listData: state.product.listData,
  isLoading: state.product.isLoading,
  isVisibleSearch: state.product.isVisibleSearch,
  isError: state.product.isError,
  errorMessage: state.product.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  searchProduct: (keyword) => dispatch(searchProduct(keyword)),
  handleVisibleProduct: (data) => dispatch(handleVisibleProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
