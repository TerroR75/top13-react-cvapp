import React, { Component } from 'react';

class CVForm extends Component {
    render() {
        return (
            <form className="CVForm">
                <div className="general-information cvform-section">
                    <h3>General Information</h3>
                    <label htmlFor="fullName">Full Name: </label>
                    <input type="text" id="fullName" name="fullName"></input>

                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input type="tel" id="phoneNumber" name="phoneNumber"></input>

                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email"></input>
                </div>
                <div className="general-information cvform-section">
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
            </form>
        )
    }
}

export default CVForm;