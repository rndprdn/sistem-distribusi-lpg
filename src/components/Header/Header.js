import React from 'react';
import styled from 'styled-components';
import burger from '../../assets/burger.svg';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 75px;
  color: #ffffff;
  background-color: #5db075;
  padding: 0 16px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 24px;
  text-align: center;
`;

export default function Header({ role, handleOpenSideDrawer }) {
  return (
    <HeaderContainer>
      <img
        src={burger}
        alt="Burger"
        style={{ position: 'absolute' }}
        onClick={handleOpenSideDrawer}
      />
      <Title>{role}</Title>
    </HeaderContainer>
  );
}
