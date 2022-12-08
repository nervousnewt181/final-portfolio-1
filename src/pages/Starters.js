import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

export default function Starters() {
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
                    <h1>Choose Your Starters!</h1>
                    <h4><b>Tools Used:</b> React, HTML/CSS/JS</h4>
                </div>

                <div className="pp--section-header"><h2>Context</h2></div>
                <div className="pp--section-body">
                    <p>
                        Pokémon is a media franchise that features a world with 
                        magical creatures that in-universe "trainers" can add to their team
                        as companions. Having made its debut in February 1996 with the games
                        Pokémon Red and Pokémon Green, Pokémon is now one of the highest
                        grossing franchises in the world, sporting an abundance of sub-categories
                        including video games, a trading card game, TV show, and more. 
                    </p>
                </div>

                <div className="pp--section-header"><h2>Problem</h2></div>
                <div className="pp--section-body">
                   <p>
                    As the Pokémon Company keeps pumping out
                    releases of games, the amount of Pokémon grows and grows. For many, it gets difficult to 
                    keep track of the ever-expanding roster of critters and creatures, which include
                    the starter Pokémon, special Pokémon given to players at the start of their
                    journeys. Often ranked highly among people's rankings, starter Pokémon
                    are a common topic of casual discourse as people love to compare them
                    and share their stories. This application was created to be an easy mechanism
                    to view these starter Pokémon.

                    </p>

                </div>

                <div className="pp--section-header"><h2>Process</h2></div>
                <div className="pp--section-body">
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                    <p>
                        HERE IS THE PROCESS.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Conclusion</h2></div>
                <div className="pp--section-body">
                    <p>Here is my conclusion.
                    </p>

                    <br />

                    <button><a className="pp--a" href="https://nervousnewt181.github.io/development/" target="_blank">Try it out!</a></button>

                </div>
            </main>
            <Footer />
        </div>
    )
}