import React, { Component } from 'react'
import CVLayout from './rightside/CVLayout';

class RightSide extends Component {
    render() {
        return (
            <div className="RightSide">

                <CVLayout generalInfo={this.props.generalInfo} />
            </div>
        )
    }
}

export default RightSide;