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

import { getProduct, handleVisibleProduct } from 'actions/productAction';
import { columns } from 'utils/dummy';

const { Search } = Input;

class ListProduct extends Component {

  handleSearch = (value) => {
    if (!value) {
      const data = {
        isVisible: true,
        isError: true,
        errorMessage: "Id masih kosong!"
      }

      this.props.handleVisibleProduct(data);
    } else {
      this.props.getProduct(value);
    }
  }

  handleClose = () => {
    const data = {
      isVisible: false,
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
          <Breadcrumb.Item>Daftar Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Daftar Produk</p>
          <Search
            className="filter-product"
            placeholder="Filter berdasarkan id"
            allowClear
            enterButton="Filter"
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
            !this.props.isLoading && !this.props.isError && this.props.listData.length > 0
              ?
                <Table className="table--product" dataSource={this.props.listData} columns={columns} />
              :
                null
          }
          {
            this.props.isVisible
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
  listData: state.product.listData,
  isLoading: state.product.isLoading,
  isVisible: state.product.isVisible,
  isError: state.product.isError,
  errorMessage: state.product.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  getProduct: (query) => dispatch(getProduct(query)),
  handleVisibleProduct: (data) => dispatch(handleVisibleProduct(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
