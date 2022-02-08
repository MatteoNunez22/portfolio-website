import React, { Component } from "react";
import pfp from '../media/portrait.jpg';
import '../App.css';

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={pfp} className="Portrait" alt="Portrait pic" />
                    <p>
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
                </header>
            </div>
        )
    }
}

export default HomePage