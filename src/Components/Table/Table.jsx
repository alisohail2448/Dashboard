import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css'



function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status};
}

const rows = [
  createData('Frozen yoghurt', 159, "22 March 2022", 'Approved'),
  createData('Ice cream sandwich', 237,  "22 March 2022", 'Pending'),
  createData('Eclair', 262,  "22 March 2022", 'Delivered'),
  createData('Cupcake', 305,  "22 March 2022", "Approved"),
  createData('Gingerbread', 356,  "22 March 2022","Pending"),
];

const makeStyles = (status) =>{
  if(status === 'Approved'){
    return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending'){
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white'
    }
  }
}

export default function DenseTable() {

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
 
    <TableContainer component={Paper} style={{boxShadow: '0px 13px 20px 0px #80808029'}} >
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='Details' >Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
