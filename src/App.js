import './App.css';
import Form from "./components/Form";
import {useEffect, useState} from "react";

function App() {
  const url = "https://rhyming-backend.herokuapp.com/"
  const [rhymeWords, setRhymeWords] = React.useState(null)

  const get_rhyme = async (word, n) => {
    const response = await fetch(`${url}/${word}`)
    setRhymeWords(response)
    //rhymeWords = "["dog","bog","sog","flog"]"
  }
  

  return (
    <div className="App">
      <Form />
      <rhymeDisplay words={rhymeWords} />
    </div>
  );
}

export default App;
