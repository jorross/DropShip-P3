import React from 'react';

// Navigation
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#order"
          onClick={() => handlePageChange('Order')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Order
        </a>
      </li>
      <li className="nav-item">
        <a
            href="#product"
            onClick={() => handlePageChange('Product')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className= {currentPage === 'Product' ? 'nav-link active' : 'nav-link'}
          >
          Product
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#user"
          onClick={() => handlePageChange('User')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'User' ? 'nav-link active' : 'nav-link'}
        >
          User
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;