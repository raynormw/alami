import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Input,
  Button,
  Alert,
  Skeleton,
} from 'antd';

import { addSeller } from 'actions/sellerAction';

class AddSeller extends Component {
  state = {
    nama: "",
    kota: "",
    isVisible: false,
    isError: false,
    errorMessage: "",
  }

  onChangeName = (e) => {
    this.setState({ nama: e.target.value });
  }

  onChangeCity = (e) => {
    this.setState({ kota: e.target.value });
  }

  handleClick = () => {
    if (!this.state.nama || !this.state.kota) {
      this.setState({
        isVisible: true,
        isError: true,
        errorMessage: "Form ada yang kosong, harap diisi semua!"
      });
    } else {
      const data = {
        "nama": this.state.nama,
        "kota": this.state.kota,
      }
      this.props.addSeller(data);
        // .then((res) => this.setState({ isVisible: true, nama: "", kota: "" }))
        // .catch((error) => {
          // this.setState({ isError: true, errorMessage: error.message, isVisible: true });
      // });
    }
  }

  handleClose = () => {
    this.setState({ isVisible: false, isError: false, errorMessage: "" });
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
                this.state.isVisible
                  ?
                    <Alert
                      className="alert"
                      message={this.state.isError ? "Error" : "Success"}
                      type={this.state.isError ? "error" : "success"}
                      description={this.state.isError ? this.state.errorMessage : "Simpan data sukses"}
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
});

const mapDispatchToProps = dispatch => ({
  addSeller: (data) => dispatch(addSeller(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSeller);
