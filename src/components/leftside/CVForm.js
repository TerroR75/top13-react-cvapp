import React, { Component } from 'react';
import AdditionalInformation from './cvform/AdditionalInformation';
import GeneralInformation from './cvform/GeneralInformation';
import SchoolInformation from './cvform/SchoolInformation';
import ExperienceInformation from './cvform/ExperienceInformation';
import LinksInformation from './cvform/LinksInformation';

class CVForm extends Component {
  render() {
    return (
      <div className='CVForm'>
        <GeneralInformation changeAppGenInfoState={this.props.changeAppGenInfoState} />
        <LinksInformation changeLinksStateAdd={this.props.changeLinksStateAdd} />
        <SchoolInformation changeSchoolAndCertsState={this.props.changeSchoolAndCertsState} />
        <ExperienceInformation changeExperienceStateAdd={this.props.changeExperienceStateAdd} />
        <AdditionalInformation changeAppState={this.props.changeAppState} />
      </div>
    );
  }
}

export default CVForm;
