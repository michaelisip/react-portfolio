import React from 'react'
import Project from './project/project.component'

const Projects = ({ endpoint, projects }) => (
    <div className="portfolio-section">
        <div className="row d-flex flex-row my-5">
            { projects.map((project, i) => (
                <Project key={i} index={i} project={project} endpoint={endpoint}></Project>
            )) }
        </div>				
    </div>

)

export default Projects