import React from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { configure } from 'axios-hooks';
import {
  Home,
  AddProduct,
  DetailProduct,
  Pesanan,
  ListAgen,
  RequestStok,
  Pembayaran,
  RequestStokList,
} from './pages';
import './App.css';

function App() {
  const token = window.localStorage.getItem('authToken');

  const AXIOS = (token) =>
    Axios.create({
      baseURL: 'https://lpg.zall.tech/api',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });

  configure({
    axios: AXIOS(token),
    cache: false,
  });

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/tambah-produk" component={AddProduct} />
      <Route exact path="/detail-produk/:id" component={DetailProduct} />
      <Route exact path="/pesanan" component={Pesanan} />
      <Route exact path="/list-agen" component={ListAgen} />
      <Route exact path="/request-stok" component={RequestStok} />
      <Route exact path="/pembayaran" component={Pembayaran} />
      <Route exact path="/request-stok-list" component={RequestStokList} />
    </div>
  );
}

export default App;
