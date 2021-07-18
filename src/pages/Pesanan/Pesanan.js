import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PageBase } from '../../components';
import location from '../../assets/location.svg';

const BoxFragment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export default function AddProduct() {
  const [orders, setorders] = useState([]);

  async function getOrders() {
    const data = await axios.get('https://lpg.zall.tech/api/order');
    setorders(data.data.data);
  }

  function statusColor(status) {
    switch (status) {
      case 'finished':
        return '#5DB075';

      case 'processed':
        return '#FBAA18';
      default:
        return '#E4032E';
    }
  }

  useEffect(() => {
    getOrders();
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
        <p style={{ fontSize: 18 }}>Pesanan</p>
      </div>
      <div style={{ marginTop: 12 }}>
        {orders?.map((order) => {
          const {
            buyer: {
              name,
              address: {
                district: {
                  city: { name: province_name },
                },
              },
            },
            status: { note, status },
          } = order;

          return (
            <BoxFragment>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 'bold', marginBottom: 3 }}>{name}</p>
                <div style={{ display: 'flex' }}>
                  <img
                    src={location}
                    alt="location"
                    style={{ marginRight: 3 }}
                  />
                  <p style={{ fontSize: 10, color: '#A0A4A8' }}>
                    {province_name}
                  </p>
                </div>
              </div>
              <i style={{ fontSize: 10, color: statusColor(status) }}>{note}</i>
            </BoxFragment>
          );
        })}
      </div>
    </PageBase>
  );
}
