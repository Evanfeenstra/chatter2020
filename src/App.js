import React, {useState, useEffect} from 'react'
import './App.css'
import {db, useDB} from './db'
import NamePicker from './namePicker'

function App() {
  
  const [name, setName] = useState('')
  const messages = useDB()

  return <main>

    <header>
      <div className="logo-wrap">
        <img className="logo"
          alt="logo"
          src="https://images.coollogo.com/images/prism-large-green.png" 
        />
        Chatter
      </div>
      <NamePicker onSave={setName} />
    </header>

    <div className="messages">
      {messages.map((m,i)=>{
        return <div key={i} className="message-wrap"
          from={m.name===name?'me':'you'}>
          <div className="message">
            <div className="msg-name">{m.name}</div>
            <div className="msg-text">{m.text}</div>
          </div>
        </div>
      })}
    </div>

    <TextInput onSend={(text)=> {
      db.send({
        text, name, ts: new Date()
      })
    }} />
    
  </main>
}

function TextInput(props){
  var [text, setText] = useState('') 
  // normal js comment
  return <div className="text-input-wrap">
    <input 
      value={text} 
      className="text-input"
      placeholder="write your message"
      onChange={e=> setText(e.target.value)}
      onKeyPress={e=> {
        if(e.key==='Enter') {
          if(text) props.onSend(text)
          setText('')
        }
      }}
    />
    <button onClick={()=> {
      if(text) props.onSend(text)
      setText('')
    }} className="button"
      disabled={!text}>
      SEND
    </button>
  </div>
}

export default App

/*
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  useEffect(()=>{
    const {pathname} = window.location
    if(pathname.length<2){
      window.location.pathname = Math.random().toString(36).slice(7)
    }
  },[])
  return (<BrowserRouter>
    <Route path="/:room" component={Content} />
  </BrowserRouter>)
}

*/




// const {room} = props.match.params