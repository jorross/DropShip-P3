import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { CREATE_USER } from "../../utils/mutations";
import { QUERY_USERS } from "../../utils/queries";

import * as React from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// add users
// do we display user list on same screen as adding users?

const User = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const userList = data?.user || [];


  // const [createUser, { error }] = useMutation(CREATE_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await createUser({
  //       variables: { ...formData },
  //     });

  //     navigate(`/users/${data.createUser._id}`);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
          {userList.map((user) => (
            <TableRow key={user.id}>
              <TableCell>text1</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>row.shipTo</TableCell>
              <TableCell>row.paymentMethod</TableCell>
              <TableCell align="right">`$$row.amount`</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

  export default User;