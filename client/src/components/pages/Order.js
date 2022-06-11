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


const Order = () => {
  // let { id } = useParams();
  const { loading, data } = useQuery(QUERY_ORDERS);
  // const { loading, data } = useQuery(QUERY_PRODUCTS, {
  //   variables: { _id: id },
  // });

  const orders = data?.orders || [];

  //const [createOrder, { error }] = useMutation(CREATE_ORDER);


  return (
    <React.Fragment>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Table size="small">
          <TableHead>Recent Orders:
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.shipTo}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell align="right">{`$${order.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* < Link2 color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
            </>*/}
      </Paper>
      </React.Fragment>

  );
}
export default Order;