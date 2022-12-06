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
    

    const handlePage = () => {
        console.log(location); 
        if(location.pathname !== "/") {
            navigate("/");
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
                window.scrollTo(0, 0);

            }}>
                <h3>NERVOUS NEWT</h3>
            </div>
            
            <div className="navbar-options-container">  
                <div className='navbar-option-div'>
                    {/* <a href='#about' className='nav-link nav-link-ltr' onClick={handlePage}>About</a> */}
                    <Link activeClass="active" smooth spy to="about" offset={-300} duration={0} onClick={handlePage}>About</Link>
                </div>
                <div className='navbar-option-div'>
                    {/* <a href='#projects' className='nav-link nav-link-ltr' onClick={handlePage}>Projects</a> */}
                    <Link activeClass="active" smooth spy to="projects" offset={-80} duration={0} onClick={handlePage}>Projects</Link>
                </div>
            </div>
            

            
        </nav>
    )
}