import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Greeting from "./Greeting.jsx"
import {Banana,Susageroll,Animallistone,Animallisttwo} from "./Favfoods.jsx"
import { Rendlist, Rendlisttwo, Rendlistthree, Rendlistifs, Rendands, Rendterns } from './Renderlist.jsx'
import { TodoList } from './TodoList.jsx'
import { ButtApp, ButtAppOldWay, ButtPassFuncApp, ButtClckHandwithArg } from './PassDataBtwComps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtClckHandwithArg />
    <ButtPassFuncApp />
    <ButtAppOldWay />
    <ButtApp />
    <TodoList />
    <Rendands />
    <Rendterns />
    <Rendlistifs />
    <Rendlistthree />
    <Rendlisttwo />
    <Rendlist />
    <Greeting />
    <Banana />
    <Susageroll />
    <Animallistone />
    <Animallisttwo />
  </StrictMode>,
)
