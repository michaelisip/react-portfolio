import React, { Component } from 'react';

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

  componentDidMount() {
    fetch(`${this.state.endpoint}/data`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          data: json.data
        })
      })
  }

  render() {

    const { loading, data, endpoint } = this.state

    if(loading) {
      return <div> Loading.. </div>
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
            <section className="portfolio my-5" id="portfolio">
              <h1 className="section-header">Portfolio.</h1>
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
