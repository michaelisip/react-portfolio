import React from 'react'

const About = ({ about, email }) => (
    <section className="about text-left my-5" id="about">
        <h1 className="header my-5">
            Hey there! <br />
            My name is <u>MJ.</u> { about.about }
        </h1>
        <p className="info"> 
            { about.description }
        </p>
        <p className="email my-5">
            <a href={ "mailto:" + email } className="text-dark"> { email } </a>
        </p>
    </section>
)

export default About