import React, { Component } from 'react';
import uniqid from 'uniqid';

class ExperienceInformation extends Component {
  render() {
    return (
      <form className='experience-information cvform-section'>
        <h3>Experience</h3>
        <label htmlFor='jobPlace'>Place: </label>
        <input type='text' id='jobPlace' name='jobPlace'></input>

        <label htmlFor='jobRespons'>Responsibilities: </label>
        <input type='text' id='jobRespons' name='jobRespons'></input>

        <label htmlFor='jobStart'>Start: </label>
        <input type='date' id='jobStart' name='jobStart'></input>

        <label htmlFor='jobEnd'>End: </label>
        <input type='date' id='jobEnd' name='jobEnd'></input>

        <button onClick={this.addButton} type='submit'>
          Add
        </button>
      </form>
    );
  }
  addButton = (e) => {
    e.preventDefault();
    const place = document.getElementById('jobPlace').value;
    const respons = document.getElementById('jobRespons').value;
    const jobStart = document.getElementById('jobStart').value;
    const jobEnd = document.getElementById('jobEnd').value;
    this.props.changeExperienceStateAdd({
      type: 'exp',
      jobPlace: place,
      jobRespons: respons,
      jobStart: jobStart,
      jobEnd: jobEnd,
      id: uniqid(),
    });
  };
}

export default ExperienceInformation;
