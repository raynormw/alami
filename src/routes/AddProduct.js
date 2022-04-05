import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Form,
  Input,
  Button,
  Skeleton,
  Alert,
} from 'antd';

import { addProduct, handleVisible } from 'actions/productAction';

class AddProduct extends Component {

  onFinish = (values) => {
    console.log('Success:', values);
  }

  onFinishFailed = (errorInfo) => {
    const data = {
      isVisible: true,
      isError: true,
      errorMessage: "Form ada yang kosong, harap diisi semua!"
    }

    this.props.handleVisible(data);
  }

  handleClose = () => {
    const data = {
      isVisible: false,
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
          <Breadcrumb.Item>Tambah Produk</Breadcrumb.Item>
        </Breadcrumb>
        {
          this.props.isLoading
          ?
            <div className="content">
              <Skeleton className="skeleton" active />
            </div>
          :
            <div className="content">
              <Form
                className="form--product"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Id"
                  name="id"
                  rules={[{ required: true, message: 'Tolong isi Id Anda!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Nama"
                  name="nama"
                  rules={[{ required: true, message: 'Tolong isi Nama Anda!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Satuan"
                  name="satuan"
                  rules={[{ required: true, message: 'Tolong isi Satuannya!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Harga Satuan"
                  name="harga satuan"
                  rules={[{ required: true, message: 'Tolong isi Harga Satuannya!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Deskripsi"
                  name="deksripsi"
                  rules={[{ required: true, message: 'Tolong isi Deskripsinya!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Tambah
                  </Button>
                </Form.Item>
              </Form>
              {
                this.props.isVisible
                  ?
                    <Alert
                      className="alert"
                      message={this.props.isError ? "Error" : "Success"}
                      type={this.props.isError ? "error" : "success"}
                      description={this.props.isError ? this.props.errorMessage : "Berhasil Menambah Penjual"}
                      onClose={this.handleClose}
                      showIcon
                      closable
                    />
                  :
                    null
              }
            </div>
        }
      </main>
    );
  };
};

const mapStateToProps = state => ({
  isLoading: state.product.isLoading,
  isVisible: state.product.isVisible,
  isError: state.product.isError,
  errorMessage: state.product.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  addProduct: (data) => dispatch(addProduct(data)),
  handleVisible: (data) => dispatch(handleVisible(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
