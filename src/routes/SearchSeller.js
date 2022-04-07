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

import { searchSeller, handleVisible } from 'actions/sellerAction';
import { sellerColumns } from 'utils/dummy';

const { Search } = Input;

class SearchSeller extends Component {

  handleSearch = (value) => {
    if (!value) {
      const data = {
        isVisible: false,
        isVisibleList: false,
        isVisibleSearch: true,
        isError: true,
        errorMessage: "Id masih kosong!"
      }

      this.props.handleVisible(data);
    } else {
      this.props.searchSeller(value);
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

    this.props.handleVisible(data);
  }

  render() {
    console.log(this.props, 'props prod');
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Daftar Seller</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Daftar Seller</p>
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
            !this.props.isLoading
            && !this.props.isError
            && this.props.searchData.length > 0
              ?
                <Table className="table--product" dataSource={this.props.searchData} columns={sellerColumns} />
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
  searchData: state.seller.searchData,
  isLoading: state.seller.isLoading,
  isVisibleSearch: state.seller.isVisibleSearch,
  isError: state.seller.isError,
  errorMessage: state.seller.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  searchSeller: (query) => dispatch(searchSeller(query)),
  handleVisible: (data) => dispatch(handleVisible(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSeller);
