import React, { Component } from 'react';

class ExperienceInformation extends Component {
    render() {
        return (
            <div className="experience-information cvform-section">
                <h3>Experience</h3>
                <label htmlFor="jobPlace">Place: </label>
                <input type="text" id="jobPlace" name="jobPlace"></input>

                <label htmlFor="jobRespons">Responsibilities: </label>
                <input type="text" id="jobRespons" name="jobRespons"></input>

                <label htmlFor="jobStart">Start: </label>
                <input type="date" id="jobStart" name="jobStart"></input>

                <label htmlFor="jobEnd">End: </label>
                <input type="date" id="jobEnd" name="jobEnd"></input>
            </div>
        )
    }
}

export default ExperienceInformation;