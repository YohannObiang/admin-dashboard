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
import Button from '@mui/material/Button';


const TableShoes = () => {
  const [chaussures, setChaussures] = useState([]);
  useEffect(() => {
    getChaussures();
  });

  const getChaussures = async () => {
    var response = await axios.get("http://localhost:3001/api/chaussures");
    setChaussures(response.data);
  };

  const editRow = () => {

    document.getElementsById('idInput').style.display= 'inline'
    document.getElementsById('nomInput').style.display= 'inline'
    document.getElementsById('marqueInput').style.display= 'inline'
    document.getElementsById('pointureInput').style.display= 'inline'
    document.getElementsById('couleurInput').style.display= 'inline'
    document.getElementsById('prixInput').style.display= 'inline'
    document.getElementsById('couleurInput').style.display= 'inline'

    const dataToBeEdited = document.getElementsById('dataToBeEdited').style.display= 'inline'

    dataToBeEdited.style.display= 'none'

  }

    return ( 
        <div className='table'>
        <br></br>

      <TableContainer component={Paper}>
        <Table sx={{ width: 1300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Chaussures</TableCell>
              <TableCell align="center">Nom Chaussures</TableCell>
              <TableCell align="center">Id marques</TableCell>
              <TableCell align="center">Pointures</TableCell>
              <TableCell align="center">Couleurs</TableCell>
              <TableCell align="center">Prix</TableCell>
              <TableCell align="center">Images</TableCell>
              <TableCell align="left">Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          {chaussures.map((chaussure) => {
            return(
            <TableRow
                key={chaussure.nom_chaussure}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }, {height: 100}}
              >
                <TableCell component="th" scope="row">
                <span className= 'dataToBeEdited'>{chaussure.id_Chaussures}</span><br></br>
                <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="idInput"  />
                </TableCell>
                <TableCell align="center">
                 <span className= 'dataToBeEdited'>{chaussure.nom_chaussure}</span><br></br>
                  <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="nomInput"  />
                  </TableCell>
                <TableCell align="center">
                  <span className= 'dataToBeEdited'>{chaussure.id_marque}</span><br></br>
                  <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="marqueInput"  />
                  </TableCell>
                <TableCell align="center">
                  <span className= 'dataToBeEdited'>{chaussure.pointure}</span><br></br>
                  <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="pointureInput"  />

                  </TableCell>
                <TableCell align="center">
                  <span className= 'dataToBeEdited'>{chaussure.couleur}</span><br></br>
                  <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="couleurInput"  />

                  </TableCell>
                <TableCell align="center">
                  <span className= 'dataToBeEdited'>{chaussure.prix}FCFA</span><br></br>
                  <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="prixInput"  />

                  </TableCell>
                <TableCell align="center">
                  <span className= 'dataToBeEdited'>{chaussure.images}</span><br></br>
                  <input type="text" placeholder='Nom chaussure' className='inputEdit Edit' name="" id="imageInput"  />

                  </TableCell>
                <TableCell align="right">
                <Stack direction="row" spacing={1} onClick={editRow}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <CreateIcon />
                    </IconButton>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <DeleteIcon/>
                    </IconButton>
                </Stack>
                <button variant="outlined" sx={{height: 35}} className='Edit' >Enregistrer</button>

                </TableCell>
              </TableRow>
          )})}

          </TableBody>
        </Table>
        </TableContainer>
      </div>
     );
}
 
export default TableShoes;