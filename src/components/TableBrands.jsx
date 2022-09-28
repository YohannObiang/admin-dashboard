import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import React, { useState, useEffect} from "react";
import axios from 'axios';


const TableBrands = () => {
 
  const [Marques, setMarques] = useState([]);
  useEffect(() => {
    getMarques();
  });

  const getMarques = async () => {
    var response = await axios.get("http://localhost:3001/api/marques");
    setMarques(response.data);

  };
  
  const toEditRow = () => {
    document.getElementsByClassName('inputEdit').style.display='inline'
    document.getElementById('marque').style.display='none'
    // document.getElementById('logoInput').style.display='inline'
    document.getElementById('logo').style.display='none'
    document.getElementById('savebtn').style.display='inline'
    document.getElementById('actions').style.display='none'

  };
  const toSeeData = () => {
    document.getElementById('marqueInput').style.display='none'
    document.getElementById('marque').style.display='inline'
    document.getElementById('logoInput').style.display='none'
    document.getElementById('logo').style.display='inline'
    document.getElementById('savebtn').style.display='none'
    document.getElementById('actions').style.display='inline'

  };


    return ( 
        <div className='table'>
        <br></br>

      <TableContainer component={Paper}>
        <Table sx={{ width: '45vw', margin: 'auto' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Marques</TableCell>
              <TableCell align="center">Marques</TableCell>
              <TableCell align="center">Logos</TableCell>
              <TableCell align="center">Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {Marques.map((marque) => {
            return(
            <TableRow
                sx={{height: 100}}
                key={marque.id_marque}
              >
                <TableCell component="th" scope="row">
                {marque.id_marque}
                </TableCell>
                <TableCell align="center">
                  <span id='marque'>{marque.marque}</span>
                </TableCell>
                <TableCell align="center">
                <span id='logo'>{marque.logo}</span>
                </TableCell>
                <TableCell align="center">
                    <Stack direction="row" spacing={1} onClick={toEditRow}>
                        <IconButton color="primary" aria-label="add to shopping cart" >
                            <CreateIcon />
                        </IconButton>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </TableCell>
            </TableRow>
            
          )})}
    

              
          </TableBody>
        </Table>
        </TableContainer>
      
      </div>
     );
}
 
export default TableBrands;