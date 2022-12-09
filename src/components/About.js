import React from "react"

export default function About() {
    return (
        <div id="about" className="about-container">
            <div className="about-content">
                <img className="newt" src={process.env.PUBLIC_URL + "/images/newt.jpeg"} alt="newt"/>
                <h1>Hi! I'm Nervous Newt.</h1>
                <h4>
                    I'm a developer and composer studying at Brown University who loves to bring joy and comfort
                    to people's lives. I'm big on food, games, and empowering people.
                    Welcome!

                </h4>
            </div>

            <img className="arrow" 
                src={process.env.PUBLIC_URL + "/images/arrow.png"}
                onClick={() => {window.scrollTo(0, 730)}}
            />
        </div>
    )

}