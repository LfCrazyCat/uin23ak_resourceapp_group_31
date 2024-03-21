// components/Layout.jsx

import React from 'react';
import NavBar from './NavBar.jsx';

const Layout = ({ children }) => {
  return (
    <>
    <NavBar />
    <main>{children}</main>
    </>
  );
};

export default Layout;