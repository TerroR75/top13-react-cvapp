import './styles/App.scss';
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
        linksArray: [],
      },
      experience: {
        placeholder: 'Previous workplaces and other experience.',
        expArray: [],
      },
      schoolAndCerts: {
        placeholder: 'School and acquired certificates.',
        schoolArray: [],
        certsArray: [],
      },
      skills: {
        placeholder: 'Skills/techstack etc.',
        skillsArray: [],
      },
    };
  }
  render() {
    return (
      <div className='App'>
        <LeftSide
          changeAppGenInfoState={this.changeGenInfoState}
          changeSchoolAndCertsState={this.changeSchoolAndCertsState}
          changeExperienceStateAdd={this.changeExperienceStateAdd}
          changeLinksStateAdd={this.changeLinksStateAdd}
        />
        <RightSide
          generalInfo={{
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            aboutMe: this.state.aboutMe,
            schoolAndCerts: this.state.schoolAndCerts,
            experience: this.state.experience,
            links: this.state.links,
          }}
          removePositionFromSchoolAndCertsState={this.removePositionFromSchoolAndCertsState}
          changeExperienceStateRemove={this.changeExperienceStateRemove}
          changeLinksStateRemove={this.changeLinksStateRemove}
        />
      </div>
    );
  }

  changeGenInfoState = (value, stateOf) => {
    if (stateOf === 'email') {
      this.setState({ email: value });
    } else if (stateOf === 'phone') {
      this.setState({ phone: value });
    } else if (stateOf === 'aboutMe') {
      this.setState({ aboutMe: value });
    } else {
      this.setState({ fullName: value });
    }
  };

  changeSchoolAndCertsState = (value, stateOf) => {
    if (stateOf === 'school') {
      this.setState({
        schoolAndCerts: {
          schoolArray: [...this.state.schoolAndCerts.schoolArray, value],
        },
      });
    } else {
      this.setState({
        schoolAndCerts: {
          certsArray: [...this.state.schoolAndCerts.certsArray, value],
        },
      });
    }
    console.log(this.state.schoolAndCerts.schoolArray);
  };
  removePositionFromSchoolAndCertsState = (itemToDelete) => {
    this.setState({
      schoolAndCerts: {
        schoolArray: this.state.schoolAndCerts.schoolArray.filter(function (item) {
          return item.id !== itemToDelete;
        }),
      },
    });
    console.log(this.state.schoolAndCerts);
  };

  changeExperienceStateAdd = (value) => {
    this.setState({
      experience: {
        expArray: [...this.state.experience.expArray, value],
      },
    });
    console.log(this.state.experience);
  };
  changeExperienceStateRemove = (itemToDelete) => {
    this.setState({
      experience: {
        expArray: this.state.experience.expArray.filter(function (item) {
          return item.id !== itemToDelete;
        }),
      },
    });
  };

  changeLinksStateAdd = (value) => {
    this.setState({
      links: {
        linksArray: [...this.state.links.linksArray, value],
      },
    });
    console.log(this.state.links);
  };

  changeLinksStateRemove = (itemToDelete) => {
    this.setState({
      links: {
        linksArray: this.state.links.linksArray.filter(function (item) {
          return item.id !== itemToDelete;
        }),
      },
    });
  };
}

export default App;
