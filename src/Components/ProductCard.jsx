import { TableCell, TableRow } from '@mui/material'
import React from 'react'

const ProductCard = ({item}) => {
    return (
        
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{item.name}</TableCell>

              <TableCell align="center" component="th" scope="row">
               <img src={item.img} alt="" style={{width:"300px"}} />
              </TableCell>
              <TableCell align="center">{item.price}</TableCell>
              <TableCell align="center"><button onClick={()=>alert(`this${item.name} is ${item.price}`)}>Info</button></TableCell>
              
            </TableRow>
    
    )
}

export default ProductCard
