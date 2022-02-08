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
                    <p className="Title">
                        Software Engineering student
                    </p>
                    <p className="Info-text">
                        Email:  matteo.nunez22@gmail <br></br>
                        Address:  Montreal, QC <br></br>
                        School:  McGill University <br></br>
                        Year:  U4 (Graduating Dec 2022) <br></br>
                    </p>
                    <a
                        className="Info-link"
                        href="https://www.linkedin.com/in/matteo-nunez-a27918139/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn -
                    </a>
                    <a
                        className="Info-link"
                        href="https://github.com/MatteoNunez22/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        - GitHub
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