// Layout.js
import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
