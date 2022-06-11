import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import ProductCard from '../ProductCard';
import { spacing } from '@mui/system';

import { QUERY_ORDERS } from '../../utils/queries';
import Auth from '../../utils/auth';

// mui homepage with product cards

// placeholder: to be replaced with product array
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// use .map() to map products
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, mt: 6 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// old home page

// // const Header = () => {
// //   const logout = (event) => {
// //     event.preventDefault();
// //     Auth.logout();
// //   };

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_ORDERS, {
//     fetchPolicy: "no-cache",
//   });

//   // const orderList = data?.order || [];

//   return (
//     <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">Homepage</h1>
//           </Link>
//           <p className="m-0">Catchy Slogan Here</p>
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <span>Hey there, {Auth.getProfile().data.username}!</span>

//               {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button> */}

//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Home;
