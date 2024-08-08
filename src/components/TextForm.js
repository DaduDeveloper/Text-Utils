import React, {useState}from 'react'

export default function TextForm(props) {


    const handleUpClick=()=>{
      let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper case", "success")
    
    }
    const handleLowClick=()=>{
      let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower case", "success")
    }
    const handleClearText=()=>{
      
        setText("")
        props.showAlert("Text Clear", "warning")
    
    }

    const handleCopy=()=>{
      
        let text =document.getElementById('myBox')
        text.select(
          navigator.clipboard.writeText(text.value)
        )
        props.showAlert("Text Copied", "warning")
    
    }

    const SpeakText=()=>{
      
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    
    }

    const removeSpace=()=>{
      
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success")
    }

    const handleOnChange=(e)=>{
      
        setText(e.target.value)
        
    }

 

    const [text, setText] = useState('');
      return (
      <>
      <div className='container' style={{color:props.mode==="dark" ? "white" :"black"}}>
         <h1>{props.heading}</h1>

        <div className="mb-3">
         <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"? "gray":"white",color:props.mode==="dark" ? "white" :"black"}}  onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
        
        <button className="btn btn-primary mx-2  " onClick={handleLowClick}>Convert to Lowercase </button>

        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text </button>

        <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text </button>

        <button className="btn btn-primary mx-2" onClick={SpeakText}>Speak </button>

        <button className="btn btn-primary mx-2 " onClick={removeSpace}>Remove Extra Space </button>
        
        

      </div>

        <div className="container my-2" style={{color:props.mode==="dark" ? "white" :"black"}}>
          <h3>Your Text Summary</h3>

          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p> {0.008 * text.split(" ").length} Minitues to read</p>
          <h3>Privew</h3>
          <p>{text.length>0 ? text:"Enter text in the textbox to prview here"}</p>
        
        </div>

         
        

      </>
  )
}
