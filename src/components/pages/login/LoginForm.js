import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';






export default function LoginForm() {
    const [prenom, setPrenom] = useState('')
    const navigate = useNavigate();
   
  
    const handleChange=(e)=>{
      e.preventDefault();
      setPrenom(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      //alert(`Bonjour ${prenom}`)
      navigate(`order/${prenom}`)
      setPrenom('')
    }
   
    
   

  return (
    
        <form action="submit" onSubmit={handleSubmit}>
              <h1>Bienvenue chez vous!</h1>
              <br />
              <h2>Connectez-vous  </h2>
              
              <input type="text" value={prenom} placeholder='Entrez votre prenom...' onChange={handleChange} required />
              <button>Accedez a votre espace</button>
              
              
        </form>
    
  )
}


