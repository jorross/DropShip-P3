import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_ORDER } from '../../utils/mutations';
import { QUERY_ORDERS } from '../../utils/queries';

import * as React from 'react';
import Link2 from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


// add / edit / delete order
// prefer a form layout for the layout of this screen

// const Order = () => {
//   let { id } = useParams();

//   const { loading, data } = useQuery(QUERY_ORDERS, {
//     variables: { _id: id },
//   });

//   const order = data?.order || [];

//   const [createOrder, { error }] = useMutation(CREATE_ORDER);

//   const handleOrder = async (techNum) => {
//     try {
//       await createOrder({});
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="card bg-white card-rounded w-50">
//       <div className="card-header bg-dark text-center">
//         <h1>Here is the order!</h1>
//       </div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="card-body text-center mt-3">
//           <h2>
//             {order[0]}
//           </h2>
//           <button className="btn btn-info" onClick={() => (1)}>
//             Vote for {order[0]}
//           </button>{' '}
//           <button className="btn btn-info" onClick={() => (2)}>
//             Vote for {order[0]}
//           </button>
//           <div className="card-footer text-center m-3">
//             <br></br>
//             <Link to="/">
//               <button className="btn btn-lg btn-danger">
//                 View all orders
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//       {error && <div>Something went wrong...</div>}
//     </div>
//   );
// };

// export default Order;

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(
    2, 
    '16 Mar, 2019', 
    'Tom Scholz', 
    'Boston, MA', 
    'MC ⠀•••• 1253', 
    100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}


export default function Orders() {
  return (
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        {/* <Title>Recent Orders</Title> */}
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link2 color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link2>
      </Paper>

  );
}