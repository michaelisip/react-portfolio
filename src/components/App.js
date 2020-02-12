import React, { Component } from 'react';
import ReactLoading from 'react-loading'
import ReactGA from 'react-ga'

import './App.css';
import Navbar from './navbar/navbar.component'
import Socials from './socials/socials.component'
import About from './about/about.component'
import Projects from './projects/projects.component'
import Repositories from './repositories/repositories.component'
import Shots from './shots/shots.component'
import Footer from './footer/footer.component'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      data: null,
      endpoint: `${process.env.REACT_APP_API_ENDPOINT}`
    }
  }

  initializeReactGA() {
      const GA_TRACKING_CODE = process.env.REACT_APP_GA_TRACKING_CODE
      console.log(GA_TRACKING_CODE)
      console.log(window.location.pathname)
      ReactGA.initialize(GA_TRACKING_CODE);
      ReactGA.pageview(window.location.pathname);
  }

  async componentDidMount() {
    this.initializeReactGA()
    const response = await fetch(`${this.state.endpoint}/data`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const json = await response.json()
    this.setState({
      loading: false,
      data: json.data
    })
  }

  
  render() {

    const { loading, data, endpoint } = this.state

    if(loading) {
      return <ReactLoading className="loading" type="bubbles" color="#000"/>
    } else {
      return (

        <div> 

          <Navbar />
          <Socials endpoint={endpoint} socials={data.socials}/>

          {/* go-to-top button */}
          <a className="btn btn-lg btn-primary fab rounded-circle" href="#about" style={{ display: "none" }}>
            <i className="fas fa-chevron-up" style={{ color: "#ffffff" }}></i>
          </a>

          <div className="container">

            <About about={data} email={data.email}/>
            <br />

            {/* Works */}
            <section className="portfolio mx-2 my-5" id="portfolio">
              <h1 className="section-header">Projects.</h1>
              <div className="row">
                <div className="col-6">
                  <hr className="mb-3" />
                </div>
              </div>

              <Projects endpoint={endpoint} projects={data.projects}/>
              <Repositories />
              <Shots />

            </section>
          </div>

          <Footer endpoint={endpoint} data={data}/>

        </div>
      );
    }
  }
}

export default App;
