import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

   const handleClsClick = () => {
    // console.log("uppercase was clicked");
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text.value)
  };


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText = ("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode==='dark'?'grey':'white',
          color: props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-success mx-2" onClick={handleLoClick}>
        Convert to LowerCase
      </button>

      <button className="btn btn-danger mx-2" onClick={handleCopy}>
        Copy Text
      </button>

       <button className="btn btn-danger mx-2" onClick={handleClsClick}>
        Clear Text
      </button>
      

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text .length>0?text:"Enter something in the textbox to preview"}</p>
    </div>
    </>
  );
}
