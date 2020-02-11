import React from 'react'
import Project from './project/project.component'

const Projects = ({ endpoint, projects }) => (
    <div className="portfolio-section">
        { projects.map((project, i) => (
            <Project key={i} index={i} project={project} endpoint={endpoint}></Project>
        )) }
    </div>

)

export default Projects