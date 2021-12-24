import React , {useState , useEffect} from 'react'
import { Link} from "react-scroll";
function Navbar2(props) {
    const [colorchange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 64){
            setColorchange(true);
          }
          else{
            setColorchange(false);
          }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    })
   
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-xl navbar-dark my_navbar ${colorchange?"indisplay":"display"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3 my_navbar" spy={true} activeClass="active" to="myhome" smooth={true} duration={100}style={{cursor : "pointer"}}>Navbar</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 fs-5 mb-lg-0 media">
                            <li className="nav-item">
                                <Link className="nav-link my_navbar_a" aria-current="page" spy={true} activeClass="active" to="myhome" smooth={true} offset={-100} duration={100}>Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link my_navbar_a" to="/" smooth={true} duration={100}>Blogs</Link>
                            </li> */}
                            <li className="nav-item" >
                                <Link className="nav-link my_navbar_a" spy={true} activeClass="active" to="about" smooth={true} offset={-80} duration={100}>About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link my_navbar_a" spy={true} activeClass="active" to="myproject" smooth={true} offset={-100} duration={100}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link my_navbar_a" spy={true} activeClass="active" to="contact" smooth={true} offset={-100} duration={100}>Contacts</Link>
                            </li>
                        </ul>
                    
                    <div class="flex-grow-0 dark_b navbar-collapse form-check form-switch">
                        <input class="form-check-input navbar-nav align-items-center" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
                        <label class="form-check-label me-4 fs-6 align-items-center" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar2
