import React, { Component } from 'react';
import uniqid from 'uniqid';

class SchoolInformation extends Component {
  render() {
    return (
      <form className='school-information cvform-section'>
        <h3>School Information</h3>
        <label htmlFor='schoolName'>School: </label>
        <input type='text' id='schoolName' name='schoolName'></input>

        <label htmlFor='schoolTitle'>Title: </label>
        <input type='text' id='schoolTitle' name='schoolTitle'></input>

        <label htmlFor='schoolStart'>Start: </label>
        <input type='date' id='schoolStart' name='schoolStart'></input>

        <label htmlFor='schoolEnd'>End: </label>
        <input type='date' id='schoolEnd' name='schoolEnd'></input>

        <button onClick={this.addButton} type='submit'>
          Add
        </button>
      </form>
    );
  }

  addButton = (e) => {
    e.preventDefault();
    const name = document.getElementById('schoolName').value;
    const title = document.getElementById('schoolTitle').value;
    const start = document.getElementById('schoolStart').value;
    const end = document.getElementById('schoolEnd').value;
    this.props.changeSchoolAndCertsState(
      { type: 'school', schoolName: name, schoolTitle: title, schoolStart: start, schoolEnd: end, id: uniqid() },
      'school'
    );
  };
}

export default SchoolInformation;
