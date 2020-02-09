import React from 'react'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white" style={{ display: "none" }}>
        <div className="container">
            <a className="navbar-brand" href="/">MJ.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse text-center" id="navbarLinks">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item py-2">
                        <a className="navbar-link aboutBtn" href="#about">About</a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="navbar-link portfolioBtn" href="#portfolio">Portfolio</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar