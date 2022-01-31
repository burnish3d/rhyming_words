import './App.css';
import Form from "./components/Form";
import {useEffect, useState} from "react";
import RhymeDisplay from "./components/Display";

function App() {
  const url = "https://rhyming-backend.herokuapp.com/"
  const [rhymeWords, setRhymeWords] = useState(null)

  const get_rhyme = async (word, n) => {
    const response = await fetch(`${url}/`)
    setRhymeWords(response)
    //rhymeWords = "["dog","bog","sog","flog"]"
  }
  

  return (
    <div className="App">
      <Form />
      <RhymeDisplay words={rhymeWords} />
    </div>
  );
}

export default App;
