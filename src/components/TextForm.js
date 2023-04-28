import React, { useState } from "react";



// in this text form i used hooks which are intiated through the term {use state} in the import section and const [count, setCount] = useState("0"); export default function 
// after that i copied a text box and a simple button from bootstrap which helped a lot pasted it into the return function with jsx fragment then used export default function with props and fired an event using javascript on click and on change extension right in the text box  and made an event listener function right at the top which listens on change and on click event and then converted current state text + written text  into the new {setText}  to captilized text .  
export default function TextForm(props) {

  
  const [text, setText] = useState("Enter your text here" );

// arrow function when uppercase button is clicked 
  const upperCase = () => {
    let newText= text.toUpperCase ()
    setText(newText)
    props.showAlert("Text changed to uppercase !", "success");
    console.log("uppercase was clicked " )
  }
// arrow function when lowercase button is clicked 
  const lowerCase = () => {
    let newText= text.toLowerCase ()
    setText(newText)
    props.showAlert("Text changed to lowercase !", "success");
    console.log("lowercase was clicked " )
  }

  const removeSpace = () => {
    let newText= text.concat ()
    setText(newText)
    props.showAlert("Extra spaces removed ! ", "success");
    console.log(" remove extra spaces was  clicked  " )
  }


  
  const copy = () => {
    let newText= text.concat ()
    setText(newText)
    props.showAlert("Copied to clipboard ! ", "success");
    console.log("copied to clipboard was  clicked   " )
  }

  
  const clear = () => {
    let newText= text.concat ()
    setText(newText)
    props.showAlert("Text Cleared !", "success");
    console.log("Text area cleared was clicked  " )
  }

// another arrow function when text of text area is changed 
  const change = (event) => {
    setText(event.target.value)
    console.log("text got changed")
  }


// return function 

  return (
    <>
      <div className="container mb-3 my-3 "     
      style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> {props.heading} </h1>

        <textarea
          className=" container  form-control"
          value={text}
          onChange={change}
          style={{backgroundColor:props.mode==='light'?'white':'grey',
          color: props.mode==='dark'?'white':'black'}}
      
         
          id="TextBox"
          rows="8"
        ></textarea>

        <div className=" my-1">
        <button className="btn my-1  mx-2 btn-primary" 
        onClick={upperCase}>
        To UpperCase
        </button>
        <button className="btn my-1 mx-2 btn-primary" onClick={lowerCase}>
        To LowerCase
        </button>

        <button className="btn my-1 mx-2 btn-primary" onClick={removeSpace}>
        Remove spaces 
        </button>

        <button className="btn my-1 mx-2 btn-primary" onClick={copy}>
        Copy to clipboard
        </button>

        <button className="btn my-1 mx-2 btn-primary" onClick={clear}>
        Clear Text area
        </button>
        </div>

        <div className = "container my-3"> 
        <h2> Your text Summary </h2>
        <p> {text.split(" ")
        .filter((element)=>{return element.length!==0} ).length} 
        words and {text.length} characters </p>
        <p> {0.008* text.split(" ").length} minutes read </p>
        <h2> Preview</h2>
        <p> {text.length>0?text:"Enter something here"} </p>

        
        </div>

      </div>
    </>
  );
}
