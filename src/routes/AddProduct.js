import React, { Component } from 'react';
import { Breadcrumb, Form, Input, Button } from 'antd';

export default class AddProduct extends Component {X

  onFinish = (values: any) => {
    console.log('Success:', values);
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <main className="outlet-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          <Breadcrumb.Item>Tambah Produk</Breadcrumb.Item>
        </Breadcrumb>
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
        </div>
      </main>
    );
  };
};
