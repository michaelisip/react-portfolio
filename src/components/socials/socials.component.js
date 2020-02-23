import React from 'react'

const Socials = ({ endpoint, socials }) => (
    <div id="socials">
      { socials.map((social, i) => (
          <div className="my-3" key={i}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <img className="sidebar-social" src={endpoint + social.logo} alt={social.name} />
              </a>
          </div>
      )) }
    </div>
)

export default Socials