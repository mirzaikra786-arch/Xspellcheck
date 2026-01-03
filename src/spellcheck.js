import { useState } from "react";

const customDictionary = {
teh: "the",
wrok: "work",
fot: "for",
exampl: "example"};

export default function Spellcheck(){
const[input, setInput]=useState("");
  const[suggestion, setSuggestion]=useState("");

  const handleInput=(e)=>{
    const text=e.target.value;
    setInput(text);
    checkspell(text);
  };
 
  const checkspell=(text)=>{
    let words= text.toLowerCase().match(/\b(\w+)\b/g) || [];
    let gotSuggestion = '';

    for (const word of words) {
      if (customDictionary[word]) {
        gotSuggestion = `Did you mean: ${customDictionary[word]}?`
        break; 
      }
    }
    setSuggestion(gotSuggestion);
  }
 
  return (
    <div className="App" style={{display:"flex",flexDirection:"column", justifyContent:"flex-start",alignItems:"flex-start",marginLeft:"5px",fontFamily:"-apple-system"}}>
     <h1 >Spell Check and Auto-Correction</h1>
    <div>
    <textarea
    type='text'
    placeholder='Enter text...'
    onChange={handleInput}
    style={{height:"60px",width:"320px"}}
    ></textarea> 
    </div>
    {suggestion && <p> {suggestion}</p>}
    </div>)
}