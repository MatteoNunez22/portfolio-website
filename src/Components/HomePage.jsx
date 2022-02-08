import React, { Component } from "react";
import pfp from '../media/portrait.jpg';
import '../App.css';

class HomePage extends Component {
    render() {
        return (
            <div className="Home">
                <header className="App-header">
                </header>
                <div className="Home-left">
                    <p className="Name">
                        Matteo Nunez
                    </p>
                    <p>
                        Software Engineering student
                    </p>
                    <a
                        className="App-link"
                        href="https://www.linkedin.com/in/matteo-nunez-a27918139/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn profile
                    </a>
                </div>
                <div className="Home-right">
                    <img src={pfp} className="Portrait" alt="Portrait pic" />
                </div>
            </div>
        )
    }
}

export default HomePage