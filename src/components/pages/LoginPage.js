import { useState } from "react";



export default function LoginPage() {

    const [prenom, setPrenom] = useState('')
   
  
    const handleChange=(e)=>{
      e.preventDefault();
      setPrenom(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      alert(`Bonjour ${prenom}`)
      setPrenom('')
    }
   

  return (
    <div>
        
        <h1>Bienvenue chez vous!</h1>
        <br />
        <h2>Connectez-vous  </h2>
        <form action="submit" onSubmit={handleSubmit}>
          <input type="text" value={prenom} placeholder='Entrez votre prenom...' onChange={handleChange} required />
          <button type='submit'>Accedez a votre espace</button>
        </form>
      
    </div>
  )
}
