import React, { Component } from 'react';
import CVForm from './leftside/CVForm';

class LeftSide extends Component {
  render() {
    return (
      <div className='LeftSide'>
        <h1>CV Maker</h1>

        <CVForm
          changeAppGenInfoState={this.props.changeAppGenInfoState}
          changeSchoolAndCertsState={this.props.changeSchoolAndCertsState}
          changeExperienceStateAdd={this.props.changeExperienceStateAdd}
          changeLinksStateAdd={this.props.changeLinksStateAdd}
        />
      </div>
    );
  }
}

export default LeftSide;
