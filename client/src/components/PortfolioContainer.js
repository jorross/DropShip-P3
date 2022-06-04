import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Order from './pages/Order';
import Product from './pages/Product';
import User from './pages/User';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Container for NavTabs/Footer checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
 //   TODO: Add Not Found
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Order') {
      return <Order />;
    }
    if (currentPage === 'Product') {
      return <Product />;
    }
    return <User />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <div className ="bg-light p-5">
        <div className =" card-deck row">
          <div className="card bg-light border-0 col text-center link-active">
              <div>
                <i class="fas fa-envelope"></i>
               <a href="mailto:amygitmail@gmail.com" className ="small text-muted">PUT IN SOME FOOTER HERE</a>
              </div>
          </div>
        </div>
     </div>
    </div>
  );
}