import React , {useState} from 'react'
import './Myapp.css'
import Navbar2 from './my_components/navbar2'
import About from './my_components/About'
import Project from './my_components/Project';
import Contact from './my_components/Contact';
function Myapp() {
    const [mode, setMode] = useState("light");
    const [incolor, setinColor] = useState(false);
    const mouseOver = (e) => {
        setinColor(true);
        if(e.target.id ==="1"){
            if(mode==="dark"){
               
                document.getElementById("1").style.borderColor = "white";
            }
            else{
                document.getElementById("1").style.borderColor = "#dc7474";
            }   
            console.log(document.getElementById("fa-python").style);
            document.getElementById("fa-python").style.color = "rgb(255, 193, 7)"
        }
        else if(e.target.id ==="2"){
            if(mode==="dark"){
                document.getElementById("2").style.borderColor = "white";
            }
            else{
                document.getElementById("2").style.borderColor = "#dc7474";
            }
            document.getElementById("fa-html5").style.color = "rgb(255, 193, 7)"
        }
        else if(e.target.id ==="3"){
            if(mode==="dark"){
                document.getElementById("3").style.borderColor = "white";
            }
            else{
                document.getElementById("3").style.borderColor = "#dc7474";
            }
            document.getElementById("fa-css3").style.color = "rgb(255, 193, 7)"
        }
        else if(e.target.id ==="4"){
            if(mode==="dark"){
                document.getElementById("4").style.borderColor = "white";
            }
            else{
                document.getElementById("4").style.borderColor = "#dc7474";
            }
            document.getElementById("fa-react").style.color = "rgb(255, 193, 7)";
        }
    }
    const mouseOut = (e) =>{
        setinColor(false);
        if(e.target.id ==="1"){
            document.getElementById("1").style.borderColor = "rgb(255, 193, 7)";
            document.getElementById("fa-python").style.color = "";
        }
        else if(e.target.id ==="2"){
            document.getElementById("2").style.borderColor = "rgb(255, 193, 7)";
            document.getElementById("fa-html5").style.color = "";
        }
        else if(e.target.id ==="3"){
            document.getElementById("3").style.borderColor = "rgb(255, 193, 7)";
            document.getElementById("fa-css3").style.color = "";
        }
        else if(e.target.id ==="4"){
            document.getElementById("4").style.borderColor = "rgb(255, 193, 7)";
            document.getElementById("fa-react").style.color = "";
        }
    }
    const changeMode = () =>{
        if(mode === "dark"){
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
        else{
            setMode("dark");
            document.body.style.backgroundColor = "#0B0B0C";
        }
    }
    return (
        <>
        <Navbar2 mode = {mode} changeMode={changeMode}/>
        <div className="home" id="myhome">
        </div>
        <div className="row heading-content">
                <div className="col-md-5" style={{width : "100%"}}>
                    <h2 style={{fontFamily : "'Montserrat Alternates', sans-serif" , fontSize : "5vw" , color : "white"}}>WELCOME TO</h2>
                </div>
                <div className="col-md-5">
                    <h3 style={{fontFamily : "Merriweather', serif" , color : "white" , fontSize: "2.15vw"}}>MY WEBSITE</h3>
                </div>
            </div>
        <About mode={mode} mouseOver= {mouseOver} mouseOut={mouseOut} incolor={incolor}/>     
        <Project mode = {mode} />
         <Contact mode={mode} />
        </>
    )
}

export default Myapp