import React from 'react'

const Socials = ({ endpoint, socials }) => (
    <div className="fixed-bottom m-3 mb-5" id="socials">
        <div className="row">
            { socials.map((social, i) => (
                <div className="col-12 my-2" key={i}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <img className="sidebar-social" src={endpoint + social.logo} alt={social.name} />
                    </a>
                </div>
            )) }
        </div>
    </div>
)

export default Socials