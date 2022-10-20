import React, { Component } from 'react';

class SchoolInformation extends Component {
    render() {
        return (
            <div className="school-information cvform-section">
                <h3>School Information</h3>
                <label htmlFor="schoolName">School: </label>
                <input type="text" id="schoolName" name="schoolName"></input>

                <label htmlFor="schoolTitle">Title (if any): </label>
                <input type="text" id="schoolTitle" name="schoolTitle"></input>

                <label htmlFor="schoolStart">Start: </label>
                <input type="date" id="schoolStart" name="schoolStart"></input>

                <label htmlFor="schoolEnd">End: </label>
                <input type="date" id="schoolEnd" name="schoolEnd"></input>
            </div>
        )
    }
}

export default SchoolInformation;