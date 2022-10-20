import React, { Component } from 'react'
import CVForm from './leftside/CVForm';

class LeftSide extends Component {
    render() {
        return (
            <div className="LeftSide">
                <h1>CV Maker</h1>

                <CVForm changeAppState={this.props.changeAppState} />
            </div>
        )
    }
}


export default LeftSide;