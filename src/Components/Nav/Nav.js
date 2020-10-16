import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import PFP from '../imgs/pfp.png'

export default class Nav extends Component {
    state = {
        nav: [
            {}
        ]
    }
    
    render() {
        return (
            <header>
                <div className="above">
                    {/* <Link to="/Landing"> */}
                        <h1>SSBM Skills!</h1>
                        <img className="PFP" src={PFP} alt="PFP" />
                </div>
            </header>
        )
    }

}