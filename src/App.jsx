import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import './App.css'
import Paragraph from "./components/paragraph"
import Button from './components/Button'
import Logo from './components/logo'
import { createBrowserRouter, RouterProvider, NavLink, Link} from "react-router-dom"
import Input from './components/Input'


function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState("");
  const [userInput, setUserInput] = useState("")

  function handleSubmit(){
      setUserInput(input)
    };

    useEffect(()=>{
        if(userInput){
          // fetch(`http://localhost:3000/?chatmsg=${userInput}`)
          fetch(`https://llm-applications-backend.onrender.com/?chatmsg=${userInput}`)
          .then((response)=> response.json())
          .then((response)=>{
            setData(response);
            setInput("");
            setUserInput("");
        })}
      },
      [userInput]
    );
  
  return (
    <>
      <Logo data="ChatBot"/>
      <div className='main-1'>
        {data.length==0?<p>Your messages will display here.</p>:<Paragraph data={data}/>}
      </div>
      <div className='main-2'>
        <Input id="input" placeholder='AI Chatbot' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <Button id="button" type='submit' handleSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default App
