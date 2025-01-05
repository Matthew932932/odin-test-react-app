import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Greeting from "./Greeting.jsx"
import {Banana,Susageroll,Animallistone,Animallisttwo} from "./Favfoods.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Banana />
    <Susageroll />
    <Animallistone />
    <Animallisttwo />
  </StrictMode>,
)
