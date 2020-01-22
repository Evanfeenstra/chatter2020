import React, {useState, useEffect} from 'react'
import './App.css'
import {db} from './db'
import NamePicker from './namePicker'

function App() {
  const [messages, setMessages] = useState([])

  return <main>

    <header> 
      <div className="logo-wrap">
        <img className="logo"
          alt="logo"
          src="https://images.coollogo.com/images/prism-large-green.png" 
        />
        Chatter
      </div>
      <NamePicker onSave={name=>{}} />
    </header>

    <div className="messages">
      {messages.map((m,i)=>{
        return <div key={i} className="message-wrap">
          <div className="message">{m.text}</div>
        </div>
      })}
    </div>

    <TextInput onSend={(text)=> {
      setMessages([text, ...messages])
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

useEffect(()=>{
    db.listen({
      receive: m=> {
        setMessages(current=> [m, ...current])
      },
      remove: id=> {
        setMessages(current=> [...current].filter(m => m.id !== id))
      },
    })
  },[])


*/