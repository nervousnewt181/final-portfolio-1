import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

export default function Unit() {
    let location = useLocation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [location.pathname]);

    return (
        <div>
            <Navbar />
            <main className="pp--main">
                <div className="pp--header">
                    <h1>Iterative Design for Unit</h1>
                    <h4><b>Tools Used: </b>Figma, HTML/CSS</h4>
                </div>



                <h2>Context</h2>
                <p>Unit is a startup which helps labor movements.
                </p>
            </main>
            <Footer />
        </div>
    )
}