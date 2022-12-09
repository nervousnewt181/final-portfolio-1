import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {Link} from "react-scroll"
//import Toggle from "react-toggle"

//require("react-toggle/style.css")

export default function Navbar() {
    // function toggle() {
    //     document.body.classList.toggle('dark-theme')
    // }
    let navigate = useNavigate();
    let location = useLocation();
    

    const handlePage = (scrollTo) => {
        console.log(location); 
        if(location.pathname !== "/") {
            navigate("/");

            if (scrollTo === "projects") {
                console.log("to projects");
                // window.scrollTo({
                //     top: 0,
                //     left: 0,
                //     behavior: "instant",
                // });
                window.scrollTo(0, 730);
            }
            if (scrollTo === "about") {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                });
            }
        }
    }

    return (
        <nav className='navbar'>
            {/* <div className='toggle-container'>
                <Toggle 
                    className='toggle'
                    onClick={toggle} 
                    icons={{
                    checked: <img className='toggle-icon' src="/images/moon.png" alt="Night mode icon"/>,
                    unchecked: <img className='toggle-icon' src="/images/sun.png" alt="Day mode icon" />,
                }}/>
            </div> */}
            <div className="logo" onClick={() => {
                navigate(`/`);
                window.scrollTo({ 
                    top: 0,
                    left: 0,
                    behavior: "instant"

                });

            }}>
                <h3>NERVOUS NEWT</h3>
            </div>
            
            <div className="navbar-options-container">  
                <div className='navbar-option-div'>
                    {/* <a href='#about' className='nav-link nav-link-ltr' onClick={handlePage}>About</a> */}
                    <Link 
                        className='nav-link nav-link-ltr' 
                        activeClass="active" smooth spy to="about" 
                        offset={-300} duration={0} 
                        onClick={() => handlePage("about")}>About</Link>
                </div>
                <div className='navbar-option-div'>
                    {/* <a href='#projects' className='nav-link nav-link-ltr' onClick={handlePage}>Projects</a> */}
                    <Link 
                        className='nav-link nav-link-ltr' 
                        activeClass="active" smooth spy to="projects" 
                        offset={-80} duration={0} 
                        onClick={() => handlePage("projects")}>Projects</Link>
                </div>
            </div>
            

            
        </nav>
    )
}