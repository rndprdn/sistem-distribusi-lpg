import styled from 'styled-components';
import { PageBase } from '../../components';

const BoxFragment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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
        <p style={{ fontSize: 18 }}>Request Stok List</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <BoxFragment>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 'bold', marginBottom: 3 }}>#1234</p>
            <p style={{ fontSize: 10, color: '#A0A4A8' }}>Sabtu, 19/06/2021</p>
          </div>
          <i style={{ fontSize: 10, color: '#5DB075' }}>Selesai</i>
        </BoxFragment>
      </div>
    </PageBase>
  );
}
