import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductCard from './ProductCard';



export default function BasicTable({list}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >Name</TableCell>
            <TableCell align="center" style={{width:"300px", justifyContent:"center"}}>Pic</TableCell>
            <TableCell align="center" >Price</TableCell>
            <TableCell align="center">Info</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((el,i) => (<ProductCard item={el} key={i} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
