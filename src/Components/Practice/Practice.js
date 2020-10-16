import React, { Component } from 'react';

export default class Practice extends Component {
    render() {
        return(
            <main>
                <section className="practice-body">
                    <div className="body-flex1">
                        <div className="body1">
                            <h2>B-Reverse</h2>
                        </div>
                        <div className="body2">
                            <img className="practice" src="../imgs/PrB-Reverse.gif" alt="B-Reverse" />
                        </div>
                        <div className="body3">
                            <img className="buttons" src="../GCN-Controller-Buttons/X.png" alt="X" />
                            <img className="buttons" src="../GCN-Controller-Buttons/Ctrl-Stick-L.png" alt="Left-Stick" />
                            <img className="plus" src="imgs/plus.png" alt="+" />
                            <img className="buttons" src="../GCN-Controller-Buttons/B.png" alt="B" />
                        </div>
                    </div>
                    <div className="body-flex2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra magna eget facilisis vehicula. Donec malesuada est mauris, id blandit nibh iaculis nec. Etiam dapibus porttitor tempus. Sed et lectus neque. Maecenas ultrices dolor vel ultrices tristique. Fusce ullamcorper sed sem nec ultricies. Suspendisse malesuada eget urna egestas pellentesque. Suspendisse vehicula dictum orci sit amet tincidunt. Phasellus at justo eget erat dapibus varius. Sed tincidunt fringilla ultricies.
                            
                        </p>
                        {/* <form>
                            <label for="hours">Hours Practiced:</label>
                            <input type="text" id="hours" name="hours" />
                            <label for="success">Success Rate:</label>
                            <input type="text" id="succes" name="sucess" />
                            <label for="implement">Ready to Implement?:</label>
                            <input type="radio" id="yes" name="implement" value="Yes" />
                            <input type="radio" id="no" name="implement" value="No" />
                        </form> */}
                    </div>
                </section>
            </main>
        )
    }
}
