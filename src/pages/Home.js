import React from "react"
import Navbar from "../components/Navbar"
import About from "../components/About"
import ProjectList from "../components/ProjectList"
import Footer from "../components/Footer"

import {useLocation} from "react-router-dom"


export default function Home() {
    // let location = useLocation(); 
    // React.useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: "instant",
    //     })
    // }, [location.pathname]);

    return (
        <div>
            <Navbar />
            <main>
                <About />
                <ProjectList />
                <Footer />
            </main>
            
            
        </div>
    )
}