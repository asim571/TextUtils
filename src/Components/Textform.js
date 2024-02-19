import React, { useState } from "react";

export default function Textform(props) {
  const [upper, setUpper ] = useState(false)
  const handleUpClick = () => {
    let newText;
    if(upper){
      newText = text.toUpperCase();
      setText(newText);
      
    } else {
      newText = text.toLowerCase();
      setText(newText);
    }
    // console.log("UpperCase was clicked");
  };
  // const handleLowClick = () => {
  //   // console.log("UpperCase was clicked");
  //   let newText = text.toLowerCase();
  //   setText(newText);
  // };
  const handleClearClick = () => {
    // console.log("UpperCase was clicked");
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="Container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className={`form-control`}
            value={text}
            onChange={handleOnChange}
            // style={{
            //   backgroundColor: props.mode === "light" ? "white" : "#7f6363",
            // }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className={`btn btn-${props.mode}${props.setBlue}${props.setGrey}${props.setGreen} btn-outline-dark mx-2`} onClick={()=> {handleUpClick(); setUpper(!upper)}}>
            Convert to {upper ? 'UpperCase' : 'LowerCase' }
          </button>
          {/* <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to LowerCase
          </button> */}
          <button className={`btn btn-${props.mode}${props.setBlue}${props.setGrey}${props.setGreen} btn-outline-dark mx-2`} onClick={handleClearClick}>
            Clear the text area
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes taken to read the words</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
