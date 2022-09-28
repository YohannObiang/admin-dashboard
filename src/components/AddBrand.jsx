import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function AddBrand() {
  const [marque, setMarque] = React.useState("")
  const handleChangeMarque = (e) => {
    let value = e.target.value
    setMarque(value)
  }
  const [logo, setLogo] = React.useState("")
  const handleChangeLogo = (e) => {
    let value = e.target.value
    setLogo(value)
  }
  const marques = { marque: marque,
                    logo: logo};
  const post = () =>{axios.post('http://localhost:3001/api/marques/ajout', marques)};
  

  return (
    <div className='addBrand'>
        <input type="text" placeholder='Marque' className='input' onChange={handleChangeMarque} name="" id="Marque" />
        <input type="text" placeholder='Logo' className='input' name="" onChange={handleChangeLogo} id="Logo" />
        <div id="Idchaussure"></div>
        <Button variant="outlined" sx={{height: 35}} onClick={post}>Ajouter</Button>
    </div>
  );
}
