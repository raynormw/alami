import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Input,
  Button,
  Alert,
  Skeleton,
} from 'antd';

import { addSeller, handleVisible } from 'actions/sellerAction';

class AddSeller extends Component {
  state = {
    nama: "",
    kota: "",
  }

  onChangeName = (e) => {
    this.setState({ nama: e.target.value });
  }

  onChangeCity = (e) => {
    this.setState({ kota: e.target.value });
  }

  handleClick = () => {
    if (!this.state.nama || !this.state.kota) {
      const data = {
        isVisible: true,
        isError: true,
        errorMessage: "Form ada yang kosong, harap diisi semua!"
      }

      this.props.handleVisible(data);
    } else {
      const data = {
        "nama": this.state.nama,
        "kota": this.state.kota,
      }

      this.props.addSeller(data);
    }
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
          <Breadcrumb.Item>Tambah Penjual</Breadcrumb.Item>
        </Breadcrumb>
        {
          this.props.isLoading
          ?
            <div className="content">
              <Skeleton className="skeleton" active />
            </div>
          :
            <div className="content">
              <Input className="add-seller" placeholder="Isi Nama Anda" onChange={this.onChangeName} />
              <Input className="add-seller" placeholder="Isi Kota Domisili Anda" onChange={this.onChangeCity} />
              <Button type="primary" onClick={this.handleClick}>Simpan</Button>
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
  }
}

const mapStateToProps = state => ({
  isLoading: state.seller.isLoading,
  isVisible: state.seller.isVisible,
  isError: state.seller.isError,
  errorMessage: state.seller.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  addSeller: (data) => dispatch(addSeller(data)),
  handleVisible: (data) => dispatch(handleVisible(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSeller);
