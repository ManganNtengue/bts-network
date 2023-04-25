import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
    const {prenom} =useParams();
  return (
    <div>
        <h1>Bonjour {prenom}</h1> 
        <Link to='/'>
            <button>Sign out</button>
        </Link>
    </div>
  )
}
