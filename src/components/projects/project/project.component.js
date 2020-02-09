import React, { Fragment } from 'react'

const Project= ({ index, project, endpoint }) => (
    <Fragment>
    {(index % 2) === 0 ? (
        <Fragment>
            <div className="col-lg-6 my-3 mt-5">
                <h1 className="project-title"> { project.name } </h1>
                <p className="project-role"> { project.role } </p>
                <p className="project-description"> 
                    { project.description }
                </p>
            </div>
            <div className="col-lg-6 my-3">
                <div className="card rounded-0 project-image">
                    <img className="card-img" src={endpoint + project.image} alt={project.name} />
                </div>
            </div>
            </Fragment>
    ) : (
        <Fragment>
            <div className="col-lg-6 my-3">
                <div className="card rounded-0 project-image">
                    <img className="card-img" src={endpoint + project.image} alt={project.name} />
                </div>
            </div>
            <div className="col-lg-6 my-3 mt-5">
                <h1 className="project-title"> { project.name } </h1>
                <p className="project-role"> { project.role } </p>
                <p className="project-description"> 
                    { project.description }
                </p>
            </div>
        </Fragment>
    )}
    </Fragment>
)

export default Project