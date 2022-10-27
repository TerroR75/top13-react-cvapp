import React, { Component } from 'react';
import uniqid from 'uniqid';

class LinksInformation extends Component {
  render() {
    return (
      <form className='links-information cvform-section'>
        <h3>Links</h3>
        <label htmlFor='linkLabel'>Label: </label>
        <input type='text' id='linkLabel' name='linkLabel'></input>

        <label htmlFor='linkUrl'>URL: </label>
        <input type='text' id='linkUrl' name='linkUrl'></input>

        <button onClick={this.addButton} type='submit'>
          Add
        </button>
      </form>
    );
  }
  addButton = (e) => {
    e.preventDefault();
    const label = document.getElementById('linkLabel').value;
    const url = document.getElementById('linkUrl').value;
    this.props.changeLinksStateAdd({
      type: 'link',
      linkLabel: label,
      linkUrl: url,
      id: uniqid(),
    });
  };
}
export default LinksInformation;
