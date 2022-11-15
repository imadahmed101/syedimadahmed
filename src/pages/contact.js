import * as React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { contactPage, contactPageButton, contactPageImage, pageTitle, resumeBtn } from '../styles/contact.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import '../styles/global.css'
import resume from '../public/resume.pdf'


function contact() {
  return (
    <div id='contact' className={contactPage}>
      <h1>Contact Me</h1>
      <p>Check my links to connect.</p>
      <Link href={resume} target="_blank"><Button >Resume</Button></Link>
      <Link to="https://linkedin.com/in/syed-imad-ahmed/" target="_blank">
        <img src={linkedin}/>
      </Link>
      <Link to="https://github.com/imadahmed101/" target="_blank">
        <img src={github}/>
      </Link>
    </div>
  )

}

export default contact