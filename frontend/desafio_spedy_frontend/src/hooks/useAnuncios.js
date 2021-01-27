import { useState, useEffect } from "react";
import axios from "axios";


export default function useAnuncios() {
    const [anuncios, setAnuncios] = useState([])
  
    useEffect(() => {
    axios.get('http://localhost:3003/classificados')
    
    .then(response => {        
    setAnuncios(response.data)        
    })
    .catch(err => {
        console.log(err.message)
    })}, [])
  
    return anuncios
  }