import styled from 'styled-components';
import { PageBase } from '../../components';
import ArrowDown from '../../assets/arrow-down.svg';

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
  background-color: #5db075;
  margin-top: 50px;
`;

export default function RequestStok() {
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
        <p style={{ fontSize: 18 }}>Request Stok</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 10, position: 'relative' }}>
          <Label htmlFor="">Produk</Label>
          <Input value="Gas LPG 3kg" />
          <img
            src={ArrowDown}
            alt=""
            style={{ position: 'absolute', top: '40px', right: '16px' }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="">Jumlah</Label>
          <Input value="1500" />
        </div>
        <Button>Pesan</Button>
      </div>
    </PageBase>
  );
}
