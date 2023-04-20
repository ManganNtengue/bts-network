import './App.css';
import React, { useState } from 'react'

export default function LoginPage() {

    const [prenom, setPrenom]=useState('')
    const [showError, setShowError]=useState(false)
  
    const handleChange=(e)=>{
      e.preventDefault();
      setPrenom(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(prenom===''){
        setShowError(true)
        
      }else{
        setShowError(false)
        alert("Bonjour "+prenom)
      }
      
      setPrenom('')
    }

  return (
    <div>
        <header className="">
            <h1>Bienvenue chez vous!</h1>
        </header>
      <body className='App-body'>
        <h2>
          Connectez-vous!  
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={prenom} placeholder='Entrez votre prenom...' onChange={handleChange} />
          {/* {showError && <label htmlFor=""> <div>Please fill in this field</div></label> } */}
          <button type='submit'>Accedez a votre espace</button>
        </form>
      </body>
    </div>
  )
}
