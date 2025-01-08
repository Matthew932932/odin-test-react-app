import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Greeting from "./Greeting.jsx"
import {Banana,Susageroll,Animallistone,Animallisttwo} from "./Favfoods.jsx"
import { Rendlist, Rendlisttwo, Rendlistthree, Rendlistifs, Rendands, Rendterns } from './Renderlist.jsx'
import { TodoList } from './TodoList.jsx'
import { ButtApp, ButtAppOldWay, ButtPassFuncApp, ButtClckHandwithArg } from './PassDataBtwComps.jsx'
import {Person, PersonExercise} from './MoreOnState.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonExercise />
    <Person />
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
