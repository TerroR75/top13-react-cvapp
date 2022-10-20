import React, { Component } from 'react';

class AdditionalInformation extends Component {
    render() {
        return (
            <div className="additional-information cvform-section">
                <h3>Additional</h3>
                <label htmlFor="aboutMe">About me: </label>
                <textarea rows="5" onChange={this.handleOnChange} id="aboutMe" name="aboutMe"></textarea>

                <label htmlFor="hobby">Hobby: </label>
                <input type="text" id="hobby" name="hobby"></input>
            </div>
        )
    }

    handleOnChange = (e) => {
        this.props.changeAppState(e.target.value, e.target.name);
    }
}

export default AdditionalInformation;