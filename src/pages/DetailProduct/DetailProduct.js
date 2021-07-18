import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import currencyFormatter from 'currency-formatter';
import styled from 'styled-components';
import { PageBase } from '../../components';
import upload from '../../assets/upload.svg';

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 42px;
  border-radius: 10px;
  border: 1px solid #dbdde0;
  padding: 0 16px;
  color: #52575c;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #a0a4a8;
  margin-top: 50px;
`;

export default function DetailProduct() {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  async function getProductDetail() {
    const data = await axios.get(`https://lpg.zall.tech/api/product/${id}`);
    setProductDetail(data.data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <PageBase>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
        }}
      >
        <p style={{ fontSize: 18 }}>Detail Produk</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 10, position: 'relative' }}>
          <Label htmlFor="">Foto</Label>
          <Input value={productDetail.image_url} />
          <div
            style={{
              position: 'absolute',
              width: '35px',
              height: '35px',
              top: '40px',
              right: '16px',
            }}
          >
            <img
              src={upload}
              alt="upload"
              style={{ position: 'relative', top: '6px', left: '6px' }}
            />
          </div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="">Nama</Label>
          <Input value={productDetail.name} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="">Harga</Label>
          <Input
            value={currencyFormatter
              .format(productDetail.price, { code: 'IDR' })
              .replace('Rp', 'Rp. ')}
          />
        </div>
        <div>
          <Label htmlFor="">Stok</Label>
          <Input value="5500" />
        </div>
        <Button>Simpan</Button>
      </div>
    </PageBase>
  );
}
