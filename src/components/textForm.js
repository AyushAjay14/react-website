import React , { useState } from 'react'
export default function TextForm(props) {
    const [text, setText ] = useState("");
    const HandleUpClick = () => {
        console.log("ToUpper button is clicked");
        let newtext = text.toUpperCase();
        setText(newtext); 
    }
    const HandleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);    
    }
    const toUpperFunc = (element) =>{
        setText(element.target.value)
        // console.log(text);
    }
    // console.log(text);
    return (
        <div>
            <div className="container mb-3 mt-5" style={{width : '69%'}}>
                <h2 className={`mb-3 text-${props.mode==="dark"?"white":"dark"}`}>Enter your Text Here.</h2>
                <textarea className="form-control" placeholder= "Enter your text here" value={text} onChange={toUpperFunc} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button type="button" onClick={HandleUpClick}  className="btn btn-primary mt-3">ToUpper</button>
                <button type="button" onClick={HandleLoClick}  className="btn btn-primary mt-3 ms-2">ToLower</button>
            </div>
            <div className="container mb-3 mt-3" style={props.mode==="dark"?{color:"white" , width : '69%'}:{color:"black" , width : '69%'}}>
                <h3 style={props.mode==="dark"?{color:"white"}:{color:"black"}}>SUMMARY</h3>
                <p>{text.split(" ").filter((element)=>{
                    return element.length!==0}).length } words and {text.split("").filter((e) => {
                        return e!==" "
                    }).length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            
        </div>
    )
}
