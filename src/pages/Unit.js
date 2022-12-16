import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

export default function Unit() {
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
                    <h1>Iterative Design for Unit</h1>
                    <h4><b>Tools Used: </b>Figma, HTML/CSS</h4>
                </div>

                <div className="pp--header-photo-container">
                    <img className="pp--header-photo" src={i + "/images/unit/unit-logo-cropped.jpg"}></img>
                </div>



                <div className="pp--section-header"><h2>Context</h2></div>
                <div className="pp--section-body">
                    <p>
                        The startup Unit is a digital labor advisor for unionizing, 
                        consisting of an organizing app, educational materials, and professional staff guidance. 
                        These elements come together to help workers organize their coworkers, get their union recognized, 
                        enshrine the changes they want into a contract, and manage their union and 
                        contract between subsequent negotiations. 
                    </p>

                    <button><a className="pp--a" href="https://unitworkers.com/" target="_blank">Explore Unit's page!</a></button>
                </div>

                <div className="pp--section-header"><h2>Task</h2></div>
                <div className="pp--section-body">
                    <p>
                        While Unit offers a host of services such as educational resources, legal assistance,
                        and professional organizers, I and three other developers honed in one of these resources: 
                        <b> software designed to aid and manage an organizing movement</b>. 
                        <p></p>
                        We decided to design for a desktop interface and focus on the admin view, which provides
                        features for managing the overall union campaign.
                    </p>

                    <p></p>
                    <h4>Users</h4>
                    <p>We approached this task intending to design for the following groups:</p>
                    <ul>
                        <li><b>Workers</b>
                            <ul>
                                <li>
                                    especially in smaller, independent companies.
                                </li>
                                <li>
                                    with little tech/data background, as our design could
                                    help visualize data to help analyze its current status.
                                </li>
                                <li>
                                    in isolated workforces that would benefit from structures for
                                    understanding relationships between workers.

                                </li>
                            </ul>

                        </li>
                        <li><b>Union organizers</b></li>
                    </ul>

                </div>

                <div className="pp--section-header"><h2>Sketching</h2></div>
                <div className="pp--section-body">
                    <p>
                        After solidifying a target user base, we proceeded to sketch out potential ideas
                        for features and varying ways to visualize data.
                    </p>

                    <img src={i + "/images/unit/sketches.jpg"}></img>

                    <p>
                    Each row represents different approaches for a particular screen. 
                    <p></p>
                    <h4>First Screen: Managing Worker Status and Conversations</h4>
                    This page is intended to keep track of all the workers 
                    that the union organizers will be having conversations with.
                    We experimented with a table and graph view, as well as toolbar positioning.
                    <p></p>
                    <h4>Second Screen: Timeline</h4>
                    This page is intended to represent a timeline on which union organizers could set goals 
                    for a duration of time, view, and interact with the goals in an intuitive and useful way. 
                    We considered was a linear view, table view, calendar view, and graph view.
                    <p></p>
                    <h4>Third Screen: Home/Dashboard</h4>
                    This page is intended to be the main dashboard or home page. 
                    We wanted this is to be a hub of information that houses links to the other screens. 
                    We considered a block/folder view, a summary/statistics view, a table view, and a calendar view.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Low-Fidelity Wireframing</h2></div>
                <div className="pp--section-body">
                    <p>
                        We proceeded to make low-fidelity wireframes, choosing to 
                        focus on some visualizations for the sake of simplicity.
                    </p>

                    <button><a className="pp--a" href="https://unitworkers.com/" target="_blank">Explore Unit's page!</a></button>

                    <img src={i + "/images/unit/unit-wireframe.png"}></img>

                    
                </div>

                <div className="pp--section-header"><h2>Visual Design Guide and High-Fidelity Prototyping</h2></div>
                <div className="pp--section-body">
                    <h4>Visual Design Guide</h4>
                    <img src={i + "/images/unit/unit-style-guide.png"}></img>
                    
                    <h4>Figma Prototype</h4>
                    <p>
                        Our mockup consists of a main dashboard screen from which users can navigate to more specific screens. 
                        At the top of this page are progress bars and metrics, which let users clearly see movement progress 
                        as well as their own individual progress. Underneath these are upcoming events and updates. 
                        Using the navigation bar at the top of the screen, users can navigate to pages like 
                        "worker lists" in which they can keep track of their co-workers and their status in 
                        relation to the movement.
                    </p>

                    <button><a className="pp--a" target="_blank" href="https://www.figma.com/file/6vmT0tFpu3AQrvfCEa9dUW/Prototype?node-id=0%3A1&t=xE1MVxx8cG5yqjPF-1">See our mockup!</a></button>
                    
                    
                </div>

                <div className="pp--section-header"><h2>High-Fidelity Prototyping Critique and Solutions</h2></div>
                <div className="pp--section-body">
                    <ul>
                        <li>
                            Users noted that the circle charts were confusing, saying that the color scheme,
                            lack of clear directionality, and lack of numbers made it difficult to understand. To resolve this,
                            we added a key to the circle chart as well as an arrow, allowing users to more intuitively
                            understand what the progress bar is conveying.
                        </li>

                        <li>
                            Users noted that the "save and exit" button for editing goals had a plus sign,
                            which implied addition. To resolve this, we changed the plus sign to a check mark.
                        </li>

                        <li>
                            Users noted that the calendar seemed more useful than general updates, and suggested increasing
                            its prominence. To resolve this, we expanded the "upcoming" section with dates and thumbnail images,
                            so users can more clearly see the upcoming timeline of their movement.
                        </li>
                    </ul> 

                    <h4>Original Dashboard</h4>   
                    <img src={i + "/images/unit/old-dashboard.jpg"}></img>
                    <h4>Updated Dashboard</h4>   
                    <img src={i + "/images/unit/new-dashboard.png"}></img>
                </div>

                <div className="pp--section-header"><h2>User Testing</h2></div>
                <div className="pp--section-body">
                    <p>
                        We uploaded our prototype to <a className="pp--inline-link" target="_blank" href="https://usertesting.com">User Testing</a> to get some feedback from 
                        real users on our design. Although we were unable to specifically target those interested in
                        organizing a workforce, this was still a worthwhile and eye-opening process.
                    </p>

                    <h4>The Task</h4>
                    <p>
                       Three users were given the following task: add a worker to the master worker list. See videos
                       of their attempt and feedback below. 
                    </p>
                    <div className="pp--link-set">
                        <button>
                            <a href="https://app.usertesting.com/v/c68a2d35-da1b-4ffc-893d-15033e0f8718?encrypted_video_handle=f2022beb-fc7b-45f8-9fb1-4728e7de3484"
                                target="_blank" className="pp--a"
                            >
                                User A
                            </a>
                        </button>
                        <button>
                            <a target="_blank" className="pp--a"
                            href="https://app.usertesting.com/v/0f5c3a28-b8b6-45dd-9377-2699250a195b?encrypted_video_handle=464b6fa2-581f-4116-acee-e4c9b19520c1">
                                User B
                            </a>
                        </button>
                        <button>
                            <a target="_blank" className="pp--a"
                            href="https://app.usertesting.com/v/84b6aff4-0066-450f-928d-be39ba48f310?encrypted_video_handle=a24744a1-a924-434d-8e67-aabce023ee0b">
                                User C
                            </a>
                        </button>
                    </div>

                    <h4>Results</h4>
                    <p>Each of the users were asked several questions about their experience.
                        Here are summaries of their responses!
                    </p>
                    <ol>
                        <li>
                            Without leaving the homepage, describe what you would select first. <strong>Do not select anything
                            yet.</strong> If
                            you would leave without clicking anywhere, please explain why.
                            <ul className="user-testing-results">
                                <li>
                                    <details>
                                        <summary>User A:</summary>
                                        <ul>
                                            <li>
                                                Clear demarcation of dashboard, worker lists, and planning.
                                            </li>
                                            <li>
                                                Not sure what "blitz" is.
                                            </li>
                                            <li>
                                                Thought it was for "micromanaging workers" and thought "auth signatures" represented
                                                credit card accounts.
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User B:</summary>
                                        <ul>
                                            <li>
                                                If wants to add a worker, would immediately go to their worker lists
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User C:</summary>
                                        <ul>
                                            <li>
                                                Would go to worker lists, if wanting to add a worker
                                            </li>
                                            <li>
                                                If clicking to just look around, either would look at updates or would look at
                                                progress to goal
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>
                        <li>
                            In your own words, describe what this website offers. Name at least 3 offerings.
                            <ul className="user-testing-results">
                                <li>
                                    <details>
                                        <summary>User A:</summary>
                                        <ul>
                                            <li>
                                                Be able to track "x, y, or z" thing workers are doing.
                                            </li>
                                            <li>
                                                Be able to plan actions for some sort of campaign.
                                            </li>
                                            <li>
                                                Track metrics like conversations and signatures.
                                            </li>
                                            <li>
                                                "Hard to say, really."
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User B:</summary>
                                        <ul>
                                            <li>
                                                Shows metrics in terms of how your workers are performing.
                                            </li>
                                            <li>
                                                Keep a schedule for you
                                            </li>
                                            <li>
                                                A worker list
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User C:</summary>
                                        <ul>
                                            <li>
                                                Looks like it can track how you're working
                                            </li>
                                            <li>
                                                Can track things you've signed
                                            </li>
                                            <li>
                                                Tracking goals
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Take as much time as you need to explore this website. Move on to the next task when you're ready.
                            <ul className="user-testing-results">
                                <li>
                                    <details>
                                        <summary>User A:</summary>
                                        <ul>
                                            <li>
                                                Quickly went to workers list and added a worker to the master list.
                                            </li>
                                            <li>
                                                Tried editing metrics and viewing events.
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User B:</summary>
                                        <ul>
                                            <li>
                                                Pretty self-explanatory, has upcoming meetings displayed
                                            </li>
                                            <li>
                                                Notes and outcomes of conversations
                                            </li>
                                            <li>
                                                Added a worker
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User C:</summary>
                                        <ul>
                                            <li>
                                                Thought it was cool that you can edit stuff (which metrics are displayed)
                                            </li>
                                            <li>
                                                Viewed event and conversation details
                                            </li>
                                            <li>
                                                Added a worker, found it intuitive
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Add a worker to your master list.
                            <ul className="user-testing-results">
                                <li>
                                    <details>
                                        <summary>User A:</summary>
                                        <ul>
                                            <li>
                                                Quickly went back and added worker again, going through the different fields.
                                            </li>
                                            <li>
                                                Thought the "claimed" column would be for manager.
                                            </li>
                                            <li>
                                                Thought task was super easy.
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User B:</summary>
                                        <ul>
                                            <li>
                                                Oops, already did!
                                            </li>
                                            <li>
                                                Super easy and intuitive
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User C:</summary>
                                        <ul>
                                            <li>
                                                Task was very easy, did it quite quickly
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Final thoughts
                            <ul className="user-testing-results">
                                <li>
                                    <details>
                                        <summary>User A:</summary>
                                        <ul>
                                            <li>Not super sure what the site is for.</li>
                                            <li>Has some ideas what it could be useful for: sales outreach, signing people up for a
                                                credit card.
                                            </li>
                                            <li>Even could "sorta" use it for political campaigning.</li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User B: no response</summary>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>User C:</summary>
                                        <ul>
                                            <li>
                                                Like that you can customize your dashboard.
                                            </li>
                                            <li>
                                                Like that it tells you how close you are to your goal.
                                            </li>
                                            <li>
                                                Didn't understand what a blitz was.
                                            </li>
                                            <li>
                                                Seems like it can do a lot, and you can customize it a lot, which is cool
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="pp--section-header"><h2>Analysis of User Testing</h2></div>
                <div className="pp--section-body">
                    <h4>Negative Feedback</h4>
                    <p>
                        There was a clear issue with users misunderstanding the intent of
                        the software. "Organizing a workforce" for those who are not familiar
                        with unionization or labor movements may come off as micromanaging
                        a workplace from a manager's point of view. 
                    </p>
                    <h4>Positive Feedback</h4>
                    <p>
                        Despite this miscommunication, users found our interface to be
                        easy to traverse due to well-placed buttons and links.
                    </p>
                </div>

                <div className="pp--section-header"><h2>Conclusion</h2></div>
                <div className="pp--section-body">
                    <p>
                        It was an enriching experience to design on a talented team,
                        and to design for something I believe in. Ways that our 
                        design could be improved moving forward is the addition
                        of an intro page with definitions to important terms
                        and concepts, as well as making the language 
                        more concise.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}