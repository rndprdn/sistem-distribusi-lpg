import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ProductFragment, PageBase } from '../../components';

export default function Home() {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    const data = await axios.get('https://lpg.zall.tech/api/product');
    setProduct(data.data.data);
  }

  useEffect(() => {
    getProduct();
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
        <p style={{ fontSize: 18 }}>Produk</p>
        <Link
          to="/tambah-produk"
          style={{ fontSize: 16, color: '#5DB075', textDecoration: 'none' }}
        >
          Tambah Produk
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        {product?.map((props, idx) => {
          const isLastColumn = (idx + 1) % 2 === 0;
          return <ProductFragment {...props} lastColumn={isLastColumn} />;
        })}
      </div>
    </PageBase>
  );
}
