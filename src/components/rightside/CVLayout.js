import React, { Component } from 'react';

class CVLayout extends Component {
  render() {
    const { email, phone, fullName, aboutMe, links, experience, schoolAndCerts, skills } = this.props.generalInfo;
    return (
      <div className='CVLayout'>
        <section className='gen-info'>
          <div className='contact-info'>
            <div>{phone ? `Tel. ${phone}` : 'Phone'}</div>
            <div>{email ? `Email: ${email}` : 'Email'}</div>
          </div>
          <div className='fullname-info'>
            <h1>{fullName ? fullName : 'Full name'}</h1>
          </div>
        </section>

        <div className='cvlabel'>About me</div>
        <section className='aboutme'>{aboutMe ? aboutMe : 'Lorem ipsum doloret'}</section>

        <div className='cvlabel'>Links</div>
        <section>
          {links ? (
            <ul>
              {links.linksArray.map((item) => {
                return (
                  <li key={item.id}>
                    {item.link}{' '}
                    <i data-type={item.type} data-id={item.id} onClick={this.removePosition}>
                      X
                    </i>
                  </li>
                );
              })}
            </ul>
          ) : (
            links.placeholder
          )}
        </section>

        <div className='cvlabel'>Experience</div>
        <section>
          {experience ? (
            <ul>
              {experience.expArray.map((item) => {
                return (
                  <li key={item.id}>
                    {item.jobPlace}{' '}
                    <i data-type={item.type} data-id={item.id} onClick={this.removePosition}>
                      X
                    </i>
                  </li>
                );
              })}
            </ul>
          ) : (
            experience.placeholder
          )}
        </section>

        <div className='cvlabel'>School and certificates</div>
        <section>
          {schoolAndCerts ? (
            <ul>
              {schoolAndCerts.schoolArray.map((item) => {
                return (
                  <li key={item.id}>
                    {item.schoolName}{' '}
                    <i data-type={item.type} data-id={item.id} onClick={this.removePosition}>
                      X
                    </i>
                  </li>
                );
              })}
            </ul>
          ) : (
            schoolAndCerts.placeholder
          )}
        </section>

        <div className='cvlabel'>Skills</div>
        <section>{skills ? skills : 'Skills, tech stack etc.'}</section>
      </div>
    );
  }

  removePosition = (item) => {
    if (item.target.dataset.type === 'school') {
      this.props.removePositionFromSchoolAndCertsState(item.target.dataset.id);
    } else if (item.target.dataset.type === 'exp') {
      this.props.changeExperienceStateRemove(item.target.dataset.id);
    } else if (item.target.dataset.type === 'link') {
      this.props.changeLinksStateRemove(item.target.dataset.id);
    }
    console.log(item.target);
  };
}

export default CVLayout;
