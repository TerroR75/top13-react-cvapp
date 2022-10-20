import React, { Component } from 'react';

class CVLayout extends Component {
    render() {
        const { email, phone, fullName, aboutMe, links, experience, schoolAndCerts, skills } = this.props.generalInfo;
        return (
            <div className="CVLayout">
                <section className="gen-info">
                    <div className="contact-info">
                        <div>{phone ? `Tel. ${phone}` : "Phone"}</div>
                        <div>{email ? `Email: ${email}` : "Email"}</div>
                    </div>
                    <div className="fullname-info">
                        <h1>{fullName ? fullName : "Full name"}</h1>
                    </div>
                </section>

                <div className="cvlabel">About me</div>
                <section className="aboutme">{aboutMe ? aboutMe : "Lorem ipsum doloret"}</section>

                <div className="cvlabel">Links</div>
                <section>{links ? links : "Portfolio and social media links"}</section>

                <div className="cvlabel">Experience</div>
                <section>{experience ? experience : "Previous experience"}</section>

                <div className="cvlabel">School and certificates</div>
                <section>{schoolAndCerts ? schoolAndCerts : "School and certificates list"}</section>

                <div className="cvlabel">Skills</div>
                <section>{skills ? skills : "Skills, tech stack etc."}</section>
            </div>
        )
    }
}

export default CVLayout;