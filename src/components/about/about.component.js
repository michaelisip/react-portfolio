import React from 'react'
import { Emoji } from 'emoji-mart'

const About = ({ about, email }) => (
    <section className="about text-left my-5" id="about">
        <h1 className="header my-5">
            Hey there! <Emoji emoji="wave" set="apple" skin="3" size={40} /> <br />
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