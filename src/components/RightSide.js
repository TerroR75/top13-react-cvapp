import React, { Component } from 'react';
import CVLayout from './rightside/CVLayout';

class RightSide extends Component {
  render() {
    return (
      <div className='RightSide'>
        <CVLayout
          generalInfo={this.props.generalInfo}
          removePositionFromSchoolAndCertsState={this.props.removePositionFromSchoolAndCertsState}
          changeExperienceStateRemove={this.props.changeExperienceStateRemove}
          changeLinksStateRemove={this.props.changeLinksStateRemove}
        />
      </div>
    );
  }
}

export default RightSide;
