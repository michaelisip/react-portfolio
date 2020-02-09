import React, { useEffect, useState } from 'react'
import Repository from './repository/repository.component'

const Repositories = () => {

    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetchUserInformation()
        fetchRepositories()
    }, [])

    const fetchUserInformation = async () => {
        const ENDPOINT = 'https://api.github.com/users/mj-isip23'
        const response = await fetch(ENDPOINT)
        const data = await response.json()
        setUserInfo(data)
    }

    const fetchRepositories = async () => {
        const ENDPOINT = 'https://api.github.com/users/mj-isip23/repos?sort=updated&&visibility=public'
        const response = await fetch(ENDPOINT)
        const data = await response.json()
        setRepos(data)
        setLoading(false)
    }

    return (
        <div className="portfolio-section my-5">
            <h1 className="subsection-header"> 
                Github 
            </h1>
            <a href="https://github.com/mj-isip23/" target="_blank" rel="noopener noreferrer" className="badge badge-primary px-3 py-1" style={{ backgroundColor: "#24292e" }}>
                Follow
            </a>
            {! loading && 
                <p className="subsection-info mb-5 mt-1" id="github-data">
                    {userInfo.followers + " Followers | " + userInfo.following + " Followings | " + userInfo.public_repos + " Repositories | " + userInfo.login}
                </p>
            }

            <div className="row justify-content-center my-2" id="repos">
                { repos.map((repo, i) => (
                    <Repository repo={repo} key={i} />
                )) }
            </div>
        </div>
    )
}

export default Repositories