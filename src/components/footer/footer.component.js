import React from 'react'

const Footer = ({ endpoint, data }) => (
    <footer className="footer p-5" id="footer">
        <div className="container">
            <a href={ endpoint + data.resume } target="_blank" rel="noopener noreferrer">
                <h1 className="download-btn text-center text-white"> Download My Resume</h1>
            </a>
            <div className="row">
                <div className="col-md-2 offset-md-5">
                    <hr className="download-seperator" />
                </div>
            </div>
            <div className="row text-center justify-content-center my-3">
                <div className="col-lg-3 col-md-4 my-3">
                    <a className="footer-text d-block goToTopBtn" href="/">Home</a>
                    <a className="footer-text d-block aboutBtn" href="/">About</a>
                    <a className="footer-text d-block portfolioBtn" href="/">Portfolio</a>
                    <a className="footer-text d-block" href="/">Contact</a>
                </div>
                <div className="col-lg-3 col-md-4 my-3">
                    <p className="footer-text"> { data.address } </p>
                    <p className="footer-text">
                        <a className="footer-text" href={ "tel:" + data.contact }> { data.contact } </a>
                    </p>
                    <p className="footer-text">
                        <a className="footer-text" href={ "mailto:" + data.email }> { data.email } </a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-4 my-3">
                    <p className="footer-text text-white">Follow Me</p>
                    { data.socials.map((social, i) => (
                        <a key={i} href={social.url} target="_blank" rel="noopener noreferrer">
                            <img className="footer-social m-1" src={ endpoint + social.logo } alt={ social.name } />
                        </a>
                    )) }
                </div>
                <div className="col-lg-3 col-md-4 my-3">
                    <p className="footer-text footer-logo">MJ.</p>
                    <p className="footer-text">Copyright @2019</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <hr className="footer-line mb-5" />
                </div>
            </div>

            <div className="credits text-center">
                <p className="footer-text">
                    Built with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React </a> licensed under <a href="https://github.com/facebook/react/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a>.
                </p>
                <p className="footer-text">
                    And designed using <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer"> Bootstrap 4 </a> under <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"> MIT License</a>.
                </p>
            </div>
        </div>
    </footer>
)

export default Footer