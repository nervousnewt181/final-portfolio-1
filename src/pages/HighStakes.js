import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

export default function HighStakes() {
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
                    <h1>High Stakes</h1>
                    <h4><b>Tools Used:</b> Musescore, Cubase</h4>
                </div>
            </main>
            <Footer />
            
        </div>
    )
}