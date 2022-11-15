import * as React from 'react'
import { Link } from 'gatsby'
import { Button, Container } from 'react-bootstrap'
import { projectsPage, projectsPageList, projectsPageTech, projectsDescription, projectsButton, title1, title2 } from '../styles/projects.module.css'
import { StaticImage } from "gatsby-plugin-image"
import react from '../images/react.svg'
import firebase from '../images/firebase.svg'
import mui from '../images/mui.svg'
import '../styles/global.css'



function projects() {
  return (
    <div id="projects" className={projectsPage}>

      <h1>Projects</h1>
<Container>

      <div className={projectsPageList}>
        
        <div>
          <Link to='http://willismonroeinsurance.com' target="_blank" >
            <StaticImage src='../images/wmi1.png' alt='banner'/>
          </Link>
        </div>
        
        <div className={projectsPageTech}>
          <h3>Insurance Brokerage Website</h3>
          <p className={projectsDescription}>Overhaul of the previous design. Fully responsive and user friendly application built to increase company presence and for lead generation. Utilizing React for the front end.
            Custom responsive design built using MUI. Contact form and Quote form powered by EmailJS.</p>
          <div>

          <img src={react}/>
          <img src={mui}/>
          </div>
          <Link to='http://willismonroeinsurance.com' target="_blank"><Button variant="warning" className={projectsButton}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/willismonroeinsurance" target="_blank"><Button variant="info">Github</Button></Link>
        </div>
        <div>
          <Link to='http://spiceez.syedimadahmed.com' target="_blank">
            <StaticImage src='../images/spiceez1.png' alt='banner'/>
          </Link>
        </div>

        <div className={projectsPageTech}>
          <h3>Online Spice Shop</h3>
          <p className={projectsDescription}>Full Stack application utilizing React for the front end and Firebase for the back end.
            Utilizing Firebase's storage and database's to hold dynamically generated items. Dashboard with full CRUD (create, read, update, delete) capabilities to change items.
            Custom responsive design built using MUI.</p>
          <div>
          <img src={react}/>
          <img src={firebase}/>
          <img src={mui}/>
          </div>
          <Link to='http://spiceez.syedimadahmed.com' target="_blank"><Button variant="warning" className={projectsButton}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/spiceez-firebase" target="_blank"><Button variant="info">Github</Button></Link>
        </div>

      </div>
</Container>
    </div>
  )
}

export default projects