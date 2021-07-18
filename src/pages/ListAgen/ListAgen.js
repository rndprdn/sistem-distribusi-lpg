import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { PageBase } from '../../components';
import location from '../../assets/location.svg';

const BoxFragment = styled.div`
  width: 100%;
  padding: 16px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export default function ListAgen() {
  const [agents, setAgents] = useState([]);

  async function getAgents() {
    const data = await axios.get('https://lpg.zall.tech/api/agent');
    setAgents(data.data.data);
  }

  useEffect(() => {
    getAgents();
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
        <p style={{ fontSize: 18 }}>List Agen</p>
        <Link
          to="/tambah-produk"
          style={{ fontSize: 16, color: '#5DB075', textDecoration: 'none' }}
        >
          Tambah Agen
        </Link>
      </div>
      <div style={{ marginTop: 12 }}>
        {agents?.map((agent) => {
          const {
            name,
            address: {
              district: {
                city: { name: province_name },
              },
            },
          } = agent;
          return (
            <BoxFragment>
              <div>
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
            </BoxFragment>
          );
        })}
      </div>
    </PageBase>
  );
}
