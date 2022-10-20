import './styles/App.scss'
import React, { Component } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'example@gmail.com',
      phone: '123 456 789',
      fullName: 'Full name',
      aboutMe: 'Lorem ipsum',
      links: {
        placeholder: 'Links to portfolio and social media.',
        linksArray: []
      },
      experience: {
        placeholder: 'Previous workplaces and other experience.',
        expArray: []
      },
      schoolAndCerts: {
        placeholder: 'School and acquired certificates.',
        schoolAndCertsArray: []
      },
      skills: {
        placeholder: 'Skills/techstack etc.',
        skillsArray: []
      }
    }
  }
  render() {
    return (
      <div className="App" >
        <LeftSide changeAppState={this.changeGenInfoState} />
        <RightSide
          generalInfo={{
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            aboutMe: this.state.aboutMe
          }} />
      </div>
    );
  }

  changeGenInfoState = (value, stateOf) => {
    if (stateOf === 'email') {
      this.setState({ email: value })
    }
    else if (stateOf === 'phone') {
      this.setState({ phone: value })
    }
    else if (stateOf === 'aboutMe') {
      this.setState({ aboutMe: value })
    }
    else {
      this.setState({ fullName: value })
    }
  }

}

export default App;
