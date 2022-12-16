import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ReactAudioPlayer from "react-audio-player"

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
                        Due to the relatively small scale of the project, I wrote two
                        main tracks: a title theme, and a level theme. Additionally, I wrote
                        simple game over and level clear themes. I started writing in MuseScore,
                        and did finishing touches in Cubase.
                    </p>
                    <img src={i + "/images/HS-Level.png"}></img>
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
                    <img src={i + "/images/score.png"}></img>
                    <p>
                        The title theme opens with a spooky chimes and dissonant synths
                        to immediately give the player the impression that they are somewhere
                        meant to be scary. However, it quickly switches to a bouncy yet
                        heavy string accompaniment.
                        <p>
                            Both the melody and accompaniment feature syncopation and 
                            chromaticism. This was to convey an element of energy
                            and joy despite the spooky atmosphere.
                        </p>
                    </p>
                    <p>After showing this to the team, they noted that it should sound a bit 
                        goofier, so I added a sound reminiscent to the "pull it" noise from "Bop It,"
                        as well as a measure with an extra beat to keep the listener
                        on their toes.
                    </p>
                    <h4>Listen to the track here!</h4>
                    <p></p>
                    <ReactAudioPlayer 
                        src={i + "/audio/HighStakes.mp3"}
                        autoPlay={false}
                        controls
                        className='audio-player'
                    />
                </div>

                <div className="pp--section-header"><h2>Level Theme</h2></div>
                <div className="pp--section-body">
                    <p>
                        I started working on the Level Theme soon after finishing the Title Theme.
                        In order to keep a sense of continuity, I kept what is essentially an identical
                        set of instruments, as well as using the melody from the Title Theme
                        as a short, repetitive figure in the accompaniment.
                    </p>
                    <p>
                        Because the game is a turn-based strategy RPG, I made some compositional decisions 
                        to make the music more contemplative. These include a less intense 
                        accompaniment featuring mostly pizzicato (plucking strings), as well as a 
                        smooth line played by the woodwinds as opposed to the more separated Title Theme
                        melody.
                    </p>
                    <h4>Listen to the track here!</h4>
                    <p></p>
                    <ReactAudioPlayer 
                        src={i + "/audio/HSLevel.wav"}
                        autoPlay={false}
                        controls
                        className='audio-player'
                    />
                    
                </div>

                <div className="pp--section-header"><h2>Level Clear and Game Over</h2></div>
                <div className="pp--section-body">
                    <p>
                        My approach to the Level Clear and Game Over themes were rather simple.
                        Both use the motif from the Title Theme. The Level Clear is a short
                        jingle followed by a contemplative string loop. The Game Over features a 
                        dissonant buildup as an opening which closes with the main theme jingle.
                    </p>
                    <h4>Level Clear</h4>
                    <ReactAudioPlayer 
                        src={i + "/audio/HS-LevelClear.wav"}
                        autoPlay={false}
                        controls
                        className='audio-player'
                    />
                    <h4>Game Over</h4>
                    <ReactAudioPlayer 
                        src={i + "/audio/HSGameOver.wav"}
                        autoPlay={false}
                        controls
                        className='audio-player'
                    />
                </div>

                <div className="pp--section-header"><h2>Conclusion</h2></div>
                <div className="pp--section-body">
                    <p>
                        Coming from a background of writing absolute music—music that exists
                        purely by and for itself as opposed to being written to accompany
                        some other art form, it was refreshing and challenging to write
                        music for a video game.

                        I hope to improve my production abilities for my next music project.

                    </p>
                    <p></p>
                    <p><b>**There is no link to the game in order to preserve anonymity.</b></p>
                </div>
            </main>
            <Footer />
            
        </div>
    )
}