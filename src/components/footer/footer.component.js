import React, { Fragment, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const Footer = ({ endpoint, data }) => {

    const [show, setShow] = useState(false);
    const [requestInfo, setRequestInfo] = useState({
        name: '',
        email: '',
        message: 'Hi! I would like to request your resume! Please send it on my email: <email>',
    })

    const handleClose = () => setShow(false);   
    const handleShow = () => setShow(true);

    const sendRequest = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/resume/request`, { 
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestInfo),
        })
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }

    const handleChange = (e) => {
        setRequestInfo({
            ...requestInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <footer className="footer p-5" id="footer">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href={ endpoint + data.resume } target="_blank" rel="noopener noreferrer">
                            <h1 className="download-btn text-center text-white"> Download My Resume</h1>
                        </a>
                        {/* <Button variant="link" onClick={handleShow}>
                            <h1 className="download-btn text-white"> Request For My Resume</h1>
                        </Button> */}
                    </div>
                    <div className="row">
                        <div className="col-md-2 offset-md-5">
                            <hr className="download-seperator" />
                        </div>
                    </div>
                    <div className="row text-center justify-content-center my-3">
                        <div className="col-lg-3 col-md-4 my-3">
                            <a className="footer-text d-block goToTopBtn" href="/">Home</a>
                            <a className="footer-text d-block aboutBtn" href="https://blogs-michaeljohnisip.netlify.com" target="_blank" rel="noopener noreferrer">Blogs</a>
                            <a className="footer-text d-block portfolioBtn" href="/">Portfolio</a>
                            <a className="footer-text d-block" href="mailto:isipmichaeljohnisip">Contact</a>
                        </div>
                        <div className="col-lg-3 col-md-4 my-3">
                            <p className="footer-text"> { data.address } </p>
                            <p className="footer-text">
                                <a className="footer-text" href={ "tel:" + data.contact }> { data.contact } </a>
                            </p>
                            <p className="footer-text">
                                <a className="footer-text" href={ "mailto:" + data.email }> { data.email } </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-4 my-3">
                            <p className="footer-text text-white">Follow Me</p>
                            { data.socials.map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer">
                                    <img className="footer-social m-1" src={ endpoint + social.logo } alt={ social.name } />
                                </a>
                            )) }
                        </div>
                        <div className="col-lg-3 col-md-4 my-3">
                            <p className="footer-text footer-logo">MJ.</p>
                            <p className="footer-text">Copyright @2020</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3">
                            <hr className="footer-line mb-5" />
                        </div>
                    </div>

                    <div className="credits text-center">
                        <p className="footer-text">
                            Built with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React </a> 
                            &middot; <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer"> Express </a>
                            &middot; <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer"> Bootstrap </a>
                        </p>
                    </div>
                </div>
            </footer>
            <Modal className="modal fade" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Request Resume </Modal.Title>
                </Modal.Header>

                <Form onSubmit={sendRequest}>
                    <Modal.Body>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={requestInfo.name} name="name" onChange={handleChange} placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" value={requestInfo.email} name="email" onChange={handleChange} placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="5" value={requestInfo.message} name="message" onChange={handleChange} style={{ resize: 'none' }} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit">Send Request</Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </Fragment>
    )
}

export default Footer