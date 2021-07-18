import React, { useState } from 'react';
import Header from '../Header';
import { SideDrawer } from '..';

export default function PageBase({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openSideDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && <SideDrawer />}
      <Header role="Suplier" handleOpenSideDrawer={openSideDrawer} />
      <div style={{ padding: '0 16px' }}>{children}</div>
    </>
  );
}
