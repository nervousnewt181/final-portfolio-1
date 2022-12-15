import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

export default function HighStakes() {
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
                    <h1>High Stakes</h1>
                    <h4><b>Tools Used:</b> Musescore, Cubase</h4>
                </div>

                <div className="pp--header-photo-container">
                    <img className="pp--header-photo" src={i +  "/images/HighStakesLogo.jpg"}></img>
                </div>

                <div className="pp--section-header"><h2>Context</h2></div>
                <div className="pp--section-body">
                    <p>
                        Brown RISD Game Developers is an organization on the Brown-RISD campus that
                        facilitates semester-long game projects, ranging from visual novels to
                        platformers to rhythm games. In Spring of 2022, I was the composer for
                        <i>High Stakes</i>, a turn-based role-playing game (RPG) 
                        featuring a vampire who lost his keys. 
                    </p>
                </div>

                <div className="pp--section-header"><h2>Beginning Decisions</h2></div>
                <div className="pp--section-body">
                    <h4>Task</h4>
                    <p>
                        Due to the relatively small scale of the project, I was only to write two
                        main tracks: a title theme, and a level theme. 
                    </p>
                    <h4>Addressing the Aesthetic</h4>
                    <p>
                        The aesthetic of the game was decided early in its conception, being
                        medieval and featuring enemies like priests, vampire hunters, and townspeople.
                        It takes place at night around a gloomy and foreboding mansion, but has a 
                        goofy tone due to the main task of the game: finding your keys.
                        <p></p>
                        Due to the given aesthetic, I decided to go with a more classical orchestration,
                        leaning heavily into instruments typically used for the "spooky" aesthetic, such as
                        a string section (violins, violas, cellos, and bass) as well as the organ and celesta.
                        <p></p>
                        Discussing with the lead designers gave me a clearer view of the protagonist's character
                        as they wanted to portray him as a tired old man who just wanted to go home. 
                        To portray this nature, I gave the melody to the bass clarinet, a low, lumbering woodwind.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Title Theme</h2></div>
                <div className="pp--section-body">
                    <p>
                        Here, I talk about the title theme.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Level Theme</h2></div>
                <div className="pp--section-body">
                    <p>
                        Here, I talk about the level theme.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Conclusion</h2></div>
                <div className="pp--section-body">
                    <p>
                        Coming from a background of writing absolute music—-music that exists
                        purely by and for itself as opposed to being written to accompany
                        some other art form, it was refreshing and challenging to write
                        music for a video game.

                        I hope to improve my production abilities for my next music project.

                    </p>
                </div>
            </main>
            <Footer />
            
        </div>
    )
}