import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

export default function Starters() {
    let location = useLocation();
    let i = process.env.PUBLIC_URL;

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

                <div className="pp--header-photo-container">
                    <img className="pp--header-photo" src={i + "/images/gen1-starters.jpg"}></img>
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
                    keep track of the ever-expanding roster of critters and creatures. Many current
                    Pokémon websites and wikis feature pages that list groups of Pokémon by a type filter,
                    but few if any feature a quick and easy toggle feature that would allow for
                    speedy navigation.
                    <p></p>
                    By using sorting, filters, and aggregators, this application was created to be an easy mechanism
                    to view Pokémon.
                    </p>

                </div>

                <div className="pp--section-header"><h2>Process</h2></div>
                <div className="pp--section-body">
                    <h4>Why starter Pokémon?</h4>
                    <p>
                    A more complete version of this application would likely include all available
                    Pokémon, but for the sake of scaleability, I decided to choose just 
                    starter Pokémon. There were a couple reasons for this decision.
                        <ol>
                            <li>
                                <p>Starter Pokémon always have the same three primary types:
                                    grass, fire, and water.
                                </p>
                            </li>
                            <li>
                                <p>Every generation of mainline games, there is a new batch
                                    of 3 Starter Pokémon.
                                </p>
                            </li>
                            <li>
                                <p>Because starter Pokémon are often the first Pokémon a player
                                    is given, they are iconic and memorable.
                                </p>
                            </li>
                        </ol>
                    This makes sorting and viewing them very intuitive.

                    <img src={i + "/images/starters-grid.png"}></img>
                    </p>

                    <h4>Designing</h4>
                    <p>I decided on a simplistic interface, as this application is not intended
                        to entice viewers or promote a product, but rather a vehicle for 
                        players to receive information with ease.
                        <p></p>
                        The center of the page features the list of Pokémon, complete with color-coded
                        cards to make type identification a cinch. To the left are the options for
                        filtering and sorting, and to the right is the "team," an aggregator
                        that lets users pick and choose Pokémon and monitor the total HP of their party.
                    </p>

                    <h4>Implementing</h4>
                    <p>This application lends itself to reusable components due to the reptitive
                        nature of the Pokémon info cards as well as the potential amount of 
                        Pokémon that could be featured. This list of info cards also had to
                        change often to respond to filter/sorting options. For these reasons,
                        I settled on React.js as a framework for this project.
                        <p></p>
                        Importing an array representing the data, the application uses state 
                        to monitor the currently selected filter/sorting options as well as 
                        the aggregator. The data to display is then mapped over to create
                        UI components. Functionality is divided among different components
                        such as an "Options" and "Team Select" component in 
                        order to split up functionality appropriately.
                    </p>  
                </div>

                <div className="pp--section-header"><h2>Conclusion</h2></div>
                <div className="pp--section-body">
                    <p>In this project I learned of the incredible utility of React.js
                        and reusable components as well as its handy state feature.
                        In the future I hope to expand this into a more in-depth
                        Pokémon viewer and team builder, displaying more information
                        on Pokémon, and compiling things like type advantages and
                        disadvantages in the aggregator.
                    </p>
                    <button><a className="pp--a" href="https://nervousnewt181.github.io/development/" target="_blank">Try it out!</a></button>

                </div>
            </main>
            <Footer />
        </div>
    )
}