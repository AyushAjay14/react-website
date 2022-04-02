import React from "react";
// import hat_logo from '../hat.jpg'
function About(props) {
    return (
        <div className="container-md " id="about" style={{marginTop : "6.25vw" }}>
            <div
                className="div_span"
                style={
                    props.mode === "dark"
                        ? { color: "#ffc107", opacity: "60%" }
                        : { color: "grey" }
                }
            >
                <span className="my_span">ABOUT ME</span>
            </div>
            <div className="div_s_span">
                <span
                    className="s_span"
                    style={
                        props.mode === "dark" ? { color: "white" } : { color: "black" }
                    }
                >
                    ABOUT ME
                </span>
            </div>
            <div className="icon">
                <span>
            <i className="fas fa-code"></i>
                </span>
            </div>
            <div
                className="container-md font media_about"
                style={
                    props.mode === "dark"
                        ? {
                            color: "white",
                            width: "86vw",
                            height: "83vh",
                            marginTop: "40px",
                        }
                        : {
                            color: "black",
                            width: "86vw",
                            height: "83vh",
                            marginTop: "40px",
                        }
                }
            >
                <div className="row" style={{ marginTop: "70px" }}>
                    <div className="col-md ">
                        <p id="my_p" style={{ fontSize: "1.06vw" }}>
                        I am an undergraduate pursuing Bachelor of Technology in Electronics and Communication Engineering from IIT ISM Dhanbad. I am a Cyber Security enthusiast and also love development.I love playing online games and also outdoor sports in my free time.Music is my companion.I like to learn about new technologies, create mini projects, participate in hackathons.
                        </p>
                    </div>
                </div>
                <div className="row media_r my_para" style={{ marginTop: "11px" , fontSize : "1.076vw"} }>
                    <div className="col-md-6 intro_m">
                        <h4 style={{ textAlign: "center" }} id="personal">
                            PERSONAL
                        </h4>
                        <div
                            className="underline"
                            style={
                                props.mode === "dark"
                                    ? { backgroundColor: "white" }
                                    : { backgroundColor: "black" }
                            }
                        ></div>
                        <ul className="intro_ul">
                            <li className="intro_li">
                                <strong>Name</strong>
                                Ayush Ajay
                            </li>
                            <li className="intro_li">
                                <strong>Age</strong>
                                21
                            </li>
                            <li className="intro_li">
                                <strong>Address</strong>
                                Lucknow , Uttar Pradesh
                            </li>
                            <li className="intro_li">
                                <strong>School</strong>
                                Lucknow Public School.
                            </li>
                            <li className="intro_li">
                                <strong>Board</strong>
                                CBSE
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 intro_m">
                        <h4 style={{ textAlign: "center" }} id="personal">
                            EDUCATION
                        </h4>
                        <div
                            className="underline"
                            style={
                                props.mode === "dark"
                                    ? { backgroundColor: "white" }
                                    : { backgroundColor: "black" }
                            }
                        ></div>
                        <ul className="intro_ul">
                            <li className="intro_li">
                                <strong>Insitute</strong>
                                IIT (ISM) Dhanbad
                            </li>
                            <li className="intro_li">
                                <strong>Programme</strong>
                                Bachelor of Technology
                            </li>
                            <li className="intro_li">
                                <strong>Department</strong>
                                Electronics and Communication Engineering
                            </li>
                            <li className="intro_li">
                                <strong>Year of Study</strong>
                                Second Year
                            </li>
                            <li className="intro_li">
                                <strong>CGPA</strong>
                                8.75/10
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row w-75 mx-auto my_para" style={{marginTop: "19px" ,
    marginBottom: "12px"}}>
                    <div className="col d-flex justify-content-between" id="mtech">
                    <div className="tech" id ="1" onMouseEnter={props.mouseOver} onMouseLeave={props.mouseOut} >
                    <i className={`fab fa-python fa-5x `} id="fa-python"></i>
                    </div>
                    <div className="tech" id="2" onMouseEnter={props.mouseOver} onMouseLeave={props.mouseOut}>
                    <i className="fab fa-html5 fa-5x" id="fa-html5"></i>
                    </div>
                    <div className="tech" id="3" onMouseEnter={props.mouseOver} onMouseLeave={props.mouseOut}>
                    <i className="fab fa-css3-alt fa-5x" id="fa-css3"></i>
                    </div>
                    <div className="tech" id="4" onMouseEnter={props.mouseOver} onMouseLeave={props.mouseOut}>
                    <i className="fab fa-react fa-5x" id="fa-react"></i>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col social">
                    <a href="https://www.facebook.com/ayush.ajay.142" target="_blank" rel="noopener noreferrer" style={props.mode === "dark" ?{color : "white"} : {color : "black"}}><i className="fab fa-facebook-square marg fa-2x"> </i></a>
                    <a href="https://www.instagram.com/____a.y.u.s.h___/" target="_blank" rel="noopener noreferrer" style={props.mode === "dark" ?{color : "white"} : {color : "black"}}><i className="fab fa-instagram-square marg fa-2x"></i></a> 
                    <a href="https://twitter.com/Ayushajay14" target="_blank" rel="noopener noreferrer" style={props.mode === "dark" ?{color : "white"} : {color : "black"}}><i className="fab fa-twitter-square marg fa-2x"> </i></a>   
                    <a href="https://www.linkedin.com/in/ayush-ajay-6b6773207/" target="_blank" rel="noopener noreferrer" style={props.mode === "dark" ?{color : "white"} : {color : "black"}}><i className="fab fa-linkedin marg fa-2x"></i></a>   
                    <a href="mailto: ayushajay52@gmail.com" target="_blank" rel="noopener noreferrer" style={props.mode === "dark" ?{color : "white"} : {color : "black"}}><i className="far fa-envelope marg fa-2x"></i></a>   
                    <a href="https://github.com/AyushAjay14" target="_blank" rel="noopener noreferrer" style={props.mode === "dark" ?{color : "white"} : {color : "black"}}><i className="fab fa-github fa-2x marg"></i></a>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

