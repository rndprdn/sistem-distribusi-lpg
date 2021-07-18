import styled from 'styled-components';
import { Link } from 'react-router-dom';
import produk from '../../assets/produk.svg';
import people from '../../assets/people.svg';
import pesanan from '../../assets/pesanan.svg';
import pengaturan from '../../assets/pengaturan.svg';

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  z-index: 10;
`;

const ProfileSection = styled.div`
  height: 160px;
  padding: 30px 16px 16px;
  background-color: #5db075;
  color: #ffffff;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 0;
`;

const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-bottom: 16px;
  color: #000000;
`;

const Text = styled.p`
  font-weight: 500;
`;

export default function SideDrawer() {
  return (
    <Container>
      <ProfileSection>Jos</ProfileSection>
      <NavSection>
        <NavLink to="/">
          <img src={produk} alt="" style={{ marginRight: '16px' }} />
          <Text>Produk</Text>
        </NavLink>
        <NavLink to="/pesanan">
          <img src={pesanan} alt="" style={{ marginRight: '16px' }} />
          <Text>Pesanan</Text>
        </NavLink>
        <NavLink to="/list-agen">
          <img src={people} alt="" style={{ marginRight: '16px' }} />
          <Text>Daftar Agen</Text>
        </NavLink>
        <hr
          style={{
            backgroundColor: 'rgba(168,169,191, 0.3)',
            marginBottom: '16px',
          }}
        />
        <NavLink>
          <img src={pengaturan} alt="" style={{ marginRight: '16px' }} />
          <Text>Pengaturan</Text>
        </NavLink>
      </NavSection>
    </Container>
  );
}
