import React from 'react'
function Project(props) {
    return (
        <div className='container project' id='myproject'>
            <div
                className="div_span"
                style={
                    props.mode === "dark"
                        ? { color: "#ffc107", opacity: "60%" }
                        : { color: "grey" }
                }
            >
                <span className="my_span">MY PROJECTS</span>
            </div>
            <div className="div_s_span">
                <span
                    className="s_span"
                    style={
                        props.mode === "dark" ? { color: "white" } : { color: "black" }
                    }
                >
                    MY PROJECTS
                </span>
            </div>
            <div className="icon">
                <span>
            <i className="fas fa-code"></i>
                </span>
            </div>
            <div className="row" style={{marginTop : "70px"}} >
                <div className="col-xl" id='cards' style={{display : "flex" , justifyContent : "space-between"}}>
                    <div class="card media_c" style={props.mode==="dark"?{background:"#0B0B0C", width: "27vw" , borderColor : "white" ,color : "white" , height : "36vh"}:{background :"white" , width: "27vw" , height : "36vh" , color : "black"}}>
        
                        <div class="card-body" style = {{ display : "flex" , flexDirection : "column" , justifyContent : "space-between"}}>
                            <h5 class="card-title">DISCORD BOT</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AyushAjay14/Discord-kickbot" class={`btn b ${props.mode==="dark"?"my_color":"btn-dark"}`} style={{width : "7vw" , whiteSpace: "nowrap" }}>EXPLORE</a>
                        </div>
                    </div>
                    <div class="card media_c" style={props.mode==="dark"?{background:"#0B0B0C", borderColor : "white" , color : "white" , width: "27vw" , height : "36vh"}:{background :"white" , width: "27vw" , height : "36vh", color : "black"}}>
                        <div class="card-body " style = {{ display : "flex" , flexDirection : "column" , justifyContent : "space-between"}}>
                            <h5 class="card-title">WEB CRAWLER</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AyushAjay14/Web-Crawler" class={`btn b ${props.mode==="dark"?"my_color":"btn-dark"}`} style={{width : "7vw" ,whiteSpace: "nowrap"}}>EXPLORE</a>
                        </div>
                    </div>
                    <div class="card media_c" style={props.mode==="dark"?{background:"#0B0B0C", color : "white" , borderColor : "white" , width: "27vw" , height : "36vh"}:{background :"white" , width: "27vw" , height : "36vh" , color : "black"}}>
                        <div class="card-body" style = {{ display : "flex" , flexDirection : "column" , justifyContent : "space-between"}}>
                            <h5 class="card-title">WEBSITE</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AyushAjay14/react-website" class={`btn b ${props.mode==="dark"?"my_color":"btn-dark"}`} style={{width : "7vw" ,whiteSpace: "nowrap"}}>EXPLORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
