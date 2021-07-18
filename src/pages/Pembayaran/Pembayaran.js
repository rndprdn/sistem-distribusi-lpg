import styled from 'styled-components';
import { PageBase } from '../../components';
import upload from '../../assets/upload.svg';
import bca from '../../assets/bca.png';
import bni from '../../assets/bni.png';
import permata from '../../assets/permata.png';
import mandiri from '../../assets/mandiri.png';

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

export default function AddProduct() {
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
        <p style={{ fontSize: 18 }}>Tambah Produk</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <p style={{ fontSize: 14 }}>
          Silakan melakukan pembayaran diantara bank dibawah ini.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
          <img src={bca} alt="BCA" />
          <div style={{ marginLeft: 16 }}>
            <p style={{ fontSize: 14, letterSpacing: 5 }}>1234567890</p>
            <p style={{ fontSize: 10 }}>a.n Asep Maximilian</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <img src={bni} alt="BCA" />
          <div style={{ marginLeft: 16 }}>
            <p style={{ fontSize: 14, letterSpacing: 5 }}>1234567890</p>
            <p style={{ fontSize: 10 }}>a.n Asep Maximilian</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <img src={permata} alt="BCA" />
          <div style={{ marginLeft: 16 }}>
            <p style={{ fontSize: 14, letterSpacing: 5 }}>1234567890</p>
            <p style={{ fontSize: 10 }}>a.n Asep Maximilian</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
          <img src={mandiri} alt="BCA" />
          <div style={{ marginLeft: 16 }}>
            <p style={{ fontSize: 14, letterSpacing: 5 }}>1234567890</p>
            <p style={{ fontSize: 10 }}>a.n Asep Maximilian</p>
          </div>
        </div>
        <div style={{ marginTop: 20, position: 'relative' }}>
          <Label htmlFor="">Bukti Transfer</Label>
          <Input value="Bukti tf.png" />
          <img
            src={upload}
            alt=""
            style={{ position: 'absolute', top: '40px', right: '16px' }}
          />
        </div>
        <Button>Saya sudah transfer</Button>
      </div>
    </PageBase>
  );
}
