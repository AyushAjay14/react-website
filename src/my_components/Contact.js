import React from 'react'

function Contact(props) {
    return (
        <div className='container' id='contact' style={{marginTop : "85px"}}>
            <div
                className="div_span "
                style={
                    props.mode === "dark"
                        ? { color: "#ffc107", opacity: "60%" }
                        : { color: "grey" }
                }
            >
                <span className="my_span">CONTACT</span>
            </div>
            <div className="div_s_span">
                <span
                    className="s_span"
                    style={
                        props.mode === "dark" ? { color: "white" } : { color: "black" }
                    }
                >
                    CONTACT
                </span>
            </div>
            <div className="icon">
                <span>
            <i className="fas fa-code"></i>
                </span>
            </div>
            <div className="row contact_h">
                <div className="col " style={{ textAlign: "center" , marginTop : "30px"}}>
                    <h2 style={{ margin: "25px 0" , fontWeight : "100"}} className={props.mode==="dark"?"text-light":"text-dark"}>Social Media Links</h2>
                    <div
                            className="underline"
                            style={
                                props.mode === "dark"
                                    ? { backgroundColor: "white"  , width : "13%" , marginTop : "-11px"}
                                    : { backgroundColor: "black", width : "13%" , marginTop : "-11px" }
                            }
                        ></div>
                    <div className="col p-4">
                        <span style={props.mode==="dark"?{color: "rgb(255, 193, 7)"}:{}}>
                            <i className={"fab fa-facebook-square marg fa-3x"}></i>
                        </span>
                        <span style={props.mode==="dark"?{color: "rgb(255, 193, 7)"}:{}}>
                            <i className="fab fa-instagram-square marg fa-3x"></i>
                        </span>
                        <span style={props.mode==="dark"?{color: "rgb(255, 193, 7)"}:{}}>
                            <i className="fab fa-twitter-square marg fa-3x"></i>
                        </span>
                        <span style={props.mode==="dark"?{color: "rgb(255, 193, 7)"}:{}}>
                            <i className="fab fa-linkedin marg fa-3x"></i>
                        </span>
                        <span style={props.mode==="dark"?{color: "rgb(255, 193, 7)"}:{}}>
                            <i className="far fa-envelope marg fa-3x"></i>
                        </span>
                        <span style={props.mode==="dark"?{color: "rgb(255, 193, 7)"}:{}}>
                            <i className="fab fa-github fa-3x marg"></i>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
