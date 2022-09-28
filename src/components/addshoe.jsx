import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Addshoe() {

  const [NomChaussure, setNomChaussure] = React.useState("")
  const handleChangeNomChaussure = (e) => {
    let value = e.target.value
    setNomChaussure(value)
  }
  const [IdMarque, setIdMarque] = React.useState("")
  const handleChangeIdMarque = (e) => {
    let value = e.target.value
    setIdMarque(value)
  }
  const [Pointure, setPointure] = React.useState("")
  const handleChangePointure = (e) => {
    let value = e.target.value
    setPointure(value)
  }
  const [Couleur, setCouleur] = React.useState("")
  const handleChangeCouleur = (e) => {
    let value = e.target.value
    setCouleur(value)
  }
  const [Prix, setPrix] = React.useState("")
  const handleChangePrix = (e) => {
    let value = e.target.value
    setPrix(value)
  }
  const [Image, setImage] = React.useState("")
  const handleChangeImage = (e) => {
    let value = e.target.value
    setImage(value)
  }
  const shoe = {
                    nom_chaussure: NomChaussure,
                    id_marque: IdMarque,
                    taille: Pointure,
                    couleur: Couleur,
                    prix: Prix,
                    images: Image};
  const post = () =>{axios.post('http://localhost:3001/api/chaussures/ajout', shoe)}

  return (
    <div className='addshoe'>
        <input type="text" placeholder='Nom chaussure' className='input' name="" id="" onChange={handleChangeNomChaussure} />
        <input type="number" placeholder='Id Marque' className='input' name="" id="" onChange={handleChangeIdMarque}/>
        <input type="number" placeholder='Pointure' className='input' name="" id="" onChange={handleChangePointure}/>
        <input type="text" placeholder='Couleur' className='input' name="" id="" onChange={handleChangeCouleur}/>
        <input type="number" placeholder='Prix' className='input' name="" id="" onChange={handleChangePrix}/>
        <input type="text" placeholder='Image' className='input' name="" id="" onChange={handleChangeImage}/>
        <Button variant="outlined" sx={{height: 35}} onClick={post}>Ajouter</Button>
    </div>
  );
}
