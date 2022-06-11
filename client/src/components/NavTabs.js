import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Navigation
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

// old navtabs
// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#order"
//           onClick={() => handlePageChange('Order')}
//           // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Order
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//             href="#product"
//             onClick={() => handlePageChange('Product')}
//             // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//             className= {currentPage === 'Product' ? 'nav-link active' : 'nav-link'}
//           >
//           Product
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#user"
//           onClick={() => handlePageChange('User')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'User' ? 'nav-link active' : 'nav-link'}
//         >
//           User
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;