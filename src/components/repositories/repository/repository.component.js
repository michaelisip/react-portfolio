import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Repository = ({ repo }) => {
    const date = new Date(repo.updated_at)
    const langColors = 
        [{
            name: "PHP",
            value: "#9573D9" 
        },{
            name: "HTML",
            value: "#FF4B13"
        },{
            name: "JavaScript",
            value: "#FFEA64"
        },{
            name: "CSS",
            value: "#135AFF"
        },{
            name: "Java",
            value: "#E93700"
        },{
            name: "C++",
            value: "#6493FF"
        },{
            name: "Python",
            value: "#FFE333"
        },{
            name: "Swift",
            value: "#FE783D"        
    }]
    const lang = langColors.find(data => data.name === repo.language)

    return (
        <div className="col-lg-4 col-md-6 my-2">
            <div className="card repo border-0">
                <div className="card-body">
                    <h6 className="card-title repo-title text-dark mb-2"> 
                        { repo.name } 
                    </h6>
                    <p className="card-subtitle repo-subtitle mb-2 text-muted"> 
                        Updated last: { date.toDateString() } 
                    </p>
                    <p className="card-text repo-text"> 
                        { repo.description ? repo.description : "No description"}
                    </p>
                    {repo.fork && 
                        <span className="badge badge-secondary fork float-left py-1 px-2" data-toggle="tooltip" data-placement="top" title="Forked"> 
                            <FontAwesomeIcon icon={faCodeBranch} />
                        </span>
                    }
                    <span className="badge repo-language badge-secondary float-right ml-2" style={{backgroundColor: lang.value}}> 
                        {repo.language ? repo.language : 'Unknown' } 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Repository