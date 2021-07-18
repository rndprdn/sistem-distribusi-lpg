import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import currencyFormatter from 'currency-formatter';

const Container = styled.div`
  width: 50%;
  padding-top: 12px;
  padding-right: ${(props) => !props.lastColumn && '6px'};
  padding-left: ${(props) => props.lastColumn && '6px'};
`;

const BoxFragment = styled(Link)`
  display: block;
  width: 100%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const BoxImg = styled.img`
  width: auto;
  height: 100%;
`;

export default function ProductFragment({
  id,
  name,
  price,
  image_url,
  lastColumn,
}) {
  return (
    <Container lastColumn={lastColumn}>
      <BoxFragment to={`/detail-produk/${id}`}>
        <div
          style={{
            height: '80px',
            textAlign: 'center',
            marginBottom: '20px',
            paddingTop: '10px',
          }}
        >
          <BoxImg src={image_url} alt="Gas" />
        </div>
        <div
          style={{
            backgroundColor: '#5DB075',
            color: '#ffffff',
            padding: '8px',
            fontSize: '12px',
          }}
        >
          <p>{name}</p>
          <p>
            {currencyFormatter
              .format(price, { code: 'IDR' })
              .replace('Rp', 'Rp. ')}
          </p>
        </div>
      </BoxFragment>
    </Container>
  );
}
