import React from 'react'

const Project= ({ index, project, endpoint }) => (
    <div className="d-flex flex-column flex-md-row align-items-center my-5">
        <div className={((index % 2) === 0 ? 'order-md-1' : 'order-md-2') + " mb-3 mt-5"} style={{ maxWidth: '800px' }}>
            <h1 className="project-title"> { project.name } </h1>
            <p className="project-role"> { project.role } </p>
            <p className="project-description"> 
                { project.description }
            </p>
        </div>
        <div className={((index % 2) === 0 ? 'order-md-2 ml-md-5' : 'order-md-1 mr-md-5') + " my-md-3"}>
            <div className="card rounded-0 project-image">
                <img className="card-img" src={endpoint + project.image} alt={project.name} style={{ maxWidth: '800px' }} />
            </div>
        </div>
    </div>
)

export default Project