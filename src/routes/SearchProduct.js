import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Table,
  Input,
  Alert,
  Skeleton,
  Empty,
} from 'antd';

import { searchProduct, handleVisibleProduct } from 'actions/productAction';
import { columns } from 'utils/dummy';

const { Search } = Input;

class SearchProduct extends Component {

  handleSearch = (value) => {
    console.log('value', value);
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
            placeholder="input keyword text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={this.handleSearch}
          />
          {
            this.props.isLoading
              ?
                <div className="content">
                  <Skeleton className="skeleton" active />
                </div>
              :
            !this.props.isLoading && this.props.isError
              ?
                <Empty />
              :
            !this.props.isLoading && !this.props.isError && this.props.searchData.length > 0
              ?
                <Table className="table--product" dataSource={this.props.searchData} columns={columns} />
              :
                null
          }
          {
            this.props.isVisibleSearch
              ?
                <Alert
                  className="alert"
                  message="Error"
                  type="error"
                  description={this.props.errorMessage}
                  onClose={this.handleClose}
                  showIcon
                  closable
                />
              :
                null
          }
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  searchData: state.product.searchData,
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
