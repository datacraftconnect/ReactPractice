import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

//JSX - Allows you to write HTML-like code inside JavaScript, making UI code more readable and expressive
//Write UI components in React
//Needs transpilation (e.g., Babel)
//styles are defined as property in jsx, while in html its called attributes
//fragements in React Js

let author = "Karthik"
//Conditional Rendring
let isLogged = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <h1 style = {{backgroundColor: "green", color:"white"}}> React JSX </h1>
    
      <br />
      <h1> React JSX - To check multiple values returning from Functions </h1>
      <br />
      {
        isLogged && <p>Logged in as {author}</p>
      }
      
   
    </React.Fragment>
  )
}

export default App
