import React from 'react';
import BasicMenu from './NavTabs';

function Header(props) {
  return (
    <header className="header">
        <h1>Welcome!</h1>
        <BasicMenu />
        {/* <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}/> */}
    </header>
  );
}

export default Header;
