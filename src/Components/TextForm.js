import React, { useState } from "react";

export default function TextForm(props) {
  const hanldeOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!" , "success");
  };
  
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!" , "success");
  };

  const handleCopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!" , "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared text!" , "success");
  };

  const [text, setText] = useState("");

  return (
    <>
    <div style={{color: props.mode === 'dark' ? 'white' :'black' }}>
      <h2>{props.heading}</h2>
      <textarea
        className="form-control"
        id="myBox"
        rows="10"
        value={text}
        onChange={hanldeOnChange}
        style={{backgroundColor: props.mode === 'dark' ? 'grey' :'white', color: props.mode === 'dark' ? 'white' :'black' }}
      ></textarea>
      <button
        type="button"
        className="btn btn-primary my-3 mx-2"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleLowerClick}
      >
        Convert to Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleCopyClick}
      >
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' :'black'}}>

     <h3>Your text Summary</h3>
     <p>{text.split(' ').filter((element) => {return element.length !==0}).length} words {text.length} Charcaters</p>
     <p>{(0.008 * text.split(' ').filter((element) => {return element.length !==0}).length)} Minutes to Read the text</p>
     <h3>Preview of text</h3>
     <p>{text.length > 0 ? text :'Enter something in the textbox to preview here'}</p>
    </div>
    </>
  );
}
