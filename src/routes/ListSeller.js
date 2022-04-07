import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Table,
  Alert,
  Skeleton,
  Empty,
  Button,
} from 'antd';

import { getSeller, handleVisible } from 'actions/sellerAction';
import { sellerColumns } from 'utils/dummy';

class ListSeller extends Component {

  handleSearch = () => {
    this.props.getSeller();
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
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Daftar Seller</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <p className="content--title">Daftar Seller</p>
          <Button className="list-seller" type="primary" onClick={this.handleSearch}>Submit</Button>
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
            !this.props.isLoading && !this.props.isError && this.props.listSeller.length > 0
              ?
                <Table className="table--product" dataSource={this.props.listSeller} columns={sellerColumns} />
              :
                null
          }
          {
            this.props.isVisibleList
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
  listSeller: state.seller.listSeller,
  isLoading: state.seller.isLoading,
  isVisibleList: state.seller.isVisibleList,
  isError: state.seller.isError,
  errorMessage: state.seller.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  getSeller: () => dispatch(getSeller()),
  handleVisible: (data) => dispatch(handleVisible(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListSeller);
