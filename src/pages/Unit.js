import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Unit() {
    return (
        <div>
            <Navbar />
            <main className="pp--main">
                <div className="pp--header">
                    <h1>Iterative Design for Unit</h1>
                    <h4>Tools Used: Figma, HTML/CSS</h4>
                </div>



                <h2>Context</h2>
                <p>Unit is a startup which helps labor movements.
                </p>
            </main>
            <Footer />
        </div>
    )
}