import React from "react";

import './Academic.css'

function Academic() {
    return (
        <div className="academic">
            <div className="brock">
                <div>
                    <img src={require("../Images/Brock.png")} />
                    <h1>B.Sc. Computer Science</h1>
                    <p>
                        Attended Brock University (2023 -2027)
                        Developed advance knowledge of various
                        Data Structures and Algorithms,
                        Computer Networks, and Software Design
                        Principals.
                    </p>
                </div>
            </div>
            <div className="icpc">
                <div>
                    <img src={require("../Images/ICPC.png")} />
                    <h1>Brock Badgers</h1>
                    <p>
                        Represented Brock University at the
                        Intercolligate Programming Contest.
                        Placing Brock University in the top 15
                        Universities in the NA East Central Region
                    </p>
                </div>
            </div>
            <div className="csc">
                <div>
                    <img src={require("../Images/CSC.png")} />
                    <h1>Club Executive</h1>
                    <p>
                        Active member of the Brock Computer
                        Science Club. Acting representative
                        to prospective Brock Computer Science
                        Students and engaging with current
                        Computer Science Students
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Academic