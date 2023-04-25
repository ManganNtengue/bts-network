import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        <h1>ErrorPage</h1>
        <Link  to='/'>
            <button>Go back to Home</button>
        </Link>
    </div>
  )
}
