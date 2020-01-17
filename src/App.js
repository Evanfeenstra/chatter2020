import React, {useState} from 'react';
import './App.css';

function App() {
  return <main>

    <header> 
      <img className="logo"
        alt="logo"
        src="https://images.coollogo.com/images/prism-large-green.png" 
      />
      Chatter
    </header>

    {/* messages */}

    <TextInput onSend={m=> console.log(m)} />
    
  </main>
}


function TextInput(props){
  var [text, setText] = useState('') 
  // normal js comment
  return <div className="text-input-wrap">
    <input value={text} className="text-input"
      placeholder="write your message"
      onChange={e=> setText(e.target.value)}
    />
    <button onClick={()=> {
      props.onSend(text)
      setText('')
    }} className="button">
      SEND
    </button>
  </div>
}

export default App;
