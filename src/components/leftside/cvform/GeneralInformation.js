import React, { Component } from 'react';

class GeneralInformation extends Component {
    render() {
        return (
            <div className="general-information cvform-section">
                <h3>General Information</h3>
                <label htmlFor="fullName">Full Name: </label>
                <input onChange={this.handleOnChange} type="text" id="fullName" name="fullName"></input>

                <label htmlFor="phoneNumber">Phone Number: </label>
                <input onChange={this.handleOnChange} type="tel" id="phoneNumber" name="phone"></input>

                <label htmlFor="email">Email: </label>
                <input onChange={this.handleOnChange} type="email" id="email" name="email"></input>
            </div>
        )

    }
    handleOnChange = (e) => {
        this.props.changeAppState(e.target.value, e.target.name);
    }


}

export default GeneralInformation;