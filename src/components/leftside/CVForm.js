import React, { Component } from 'react';
import AdditionalInformation from './cvform/AdditionalInformation';
import GeneralInformation from './cvform/GeneralInformation';
import SchoolInformation from './cvform/SchoolInformation';
import ExperienceInformation from './cvform/ExperienceInformation';

class CVForm extends Component {
    render() {
        return (
            <form className="CVForm">
                <GeneralInformation changeAppState={this.props.changeAppState} />
                <SchoolInformation />
                <ExperienceInformation />
                <AdditionalInformation changeAppState={this.props.changeAppState} />
            </form>
        )
    }
}

export default CVForm;