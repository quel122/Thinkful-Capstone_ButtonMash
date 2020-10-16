import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return(
            <main>
                <section>
                    <p className="mission">
                        The competetive Super Smash Brothers scene is a continuously thriving community that has seen another small boost since the release of Slippi's Rollback feature introduced to Dolphin's netplay feature. If you have ever delved into Melee's competetive scene, you are surely aware of the skill gap between casual and competetive play. With that being said, to legitimately get your name up there with the greats, you would have to log countless hours of precise training. Sure, there is nothing considerably wrong with blindly learning the advanced mechanics of the game, but is that the most efficient?
                    </p>
                    
                    <div className="list-container">
                        <ul>
                            <li>B-Reverse +</li>
                            <li>Boost Grab +</li>
                            <li>Dash Dance +</li>
                            <li>Edge Hop +</li>
                            <li>Fast Fall +</li>
                            <li>Fox-Trot +</li>
                            <li>Shield Stop +</li>
                            <li>Short Hop +</li>
                            <li>Tech +</li>
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}