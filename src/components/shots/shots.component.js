import React, { useEffect, useState } from 'react'

const Shots = () => {

    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState({})
    const [shots, setShots] = useState([])

    useEffect(() => {
        fetchUserInformation()
        fetchShots()
    }, [])

    const fetchUserInformation = async () => {
        const ENDPOINT = 'https://api.dribbble.com/v2/user?access_token'
        const ACCESS_TOKEN = process.env.REACT_APP_DRIBBBLE_ACCESS_TOKEN
        const response = await fetch(`${ENDPOINT}=${ACCESS_TOKEN}`)
        const data = await response.json()
        setUserInfo(data)
    }

    const fetchShots = async () => {
        const ENDPOINT = 'https://api.dribbble.com/v2/user/shots?access_token'
        const ACCESS_TOKEN = process.env.REACT_APP_DRIBBBLE_ACCESS_TOKEN
        const response = await fetch(`${ENDPOINT}=${ACCESS_TOKEN}`)
        const data = await response.json()
        setShots(data)
        setLoading(false)
    } 

    return (
        <div className="portfolio-section my-5">
            <h1 className="subsection-header"> 
                Dribbble 
            </h1>
            <a href="https://dribbble.com/ehemjii" target="_blank" rel="noopener noreferrer" className="badge badge-primary px-3 py-1" style={{ backgroundColor: "#ea4c89" }}>
                Follow
            </a>
            <p className="subsection-info mb-5 mt-1" id="dribbble-data">
                {! loading && 
                    userInfo.followers_count + " Followers | " + userInfo.login
                }
            </p>

            <div className="row justify-content-center text-center my-2" id="shots">
                {shots.map((shot, i) => (
                    <div className="col-lg-4 col-md-6 text-left my-2" key={i}>
                        <div className="card shot shadow-0 border-0 rounded-0">
                            <img src={shot.images.normal} className="card-img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shots