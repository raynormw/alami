import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  Input,
  Button,
  Skeleton,
  Alert,
} from 'antd';

import { addSeller, handleVisible } from 'actions/sellerAction';

class AddSeller extends Component {
  state = {
    nama: "",
    kota: "",
    jenis: "",
    tahunBerdiri: "",
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        "jenis": this.state.jenis,
        "tahunBerdiri": this.state.tahunBerdiri,
      }

      this.props.addSeller(data);
      this.setState({
        nama: "",
        kota: "",
        "jenis": "",
        "tahunBerdiri": "",
      });
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
    console.log(this.state, 'state');
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
              <Input name="nama" className="add-seller" placeholder="Isi Nama Anda" onChange={this.onChange} />
              <Input name="kota"className="add-seller" placeholder="Isi Kota Domisili Anda" onChange={this.onChange} />
              <Input name="jenis"className="add-seller" placeholder="Isi Jenis Seller Anda" onChange={this.onChange} />
              <Input name="tahunBerdiri"className="add-seller" placeholder="Isi Tahun berdiri seller" onChange={this.onChange} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSeller);
