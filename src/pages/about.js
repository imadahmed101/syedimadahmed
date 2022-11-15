import * as React from 'react'
import { Link } from 'gatsby'
import { Button, Container, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { aboutPage, aboutMe, aboutMeSection, aboutMeStack, skills, skillsSection } from '../styles/about.module.css'
import resume from '../public/resume.pdf'
import react from '../images/react.svg'
import firebase from '../images/firebase.svg'
import mui from '../images/mui.svg'
import node from '../images/node-js.svg'
import js from '../images/js.svg'
import '../styles/global.css'

function about() {
  return (

    <div id="about" className={aboutPage}>
      <h1>Skills</h1>

      <div className={skillsSection}>


        <OverlayTrigger overlay={<Tooltip id="tooltip">React<br />Front-End</Tooltip>}>
          <span className="d-inline-block">
            <img src={react} width="100rem" />
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">Node<br />Back-End</Tooltip>}>
          <span className="d-inline-block">
            <img src={node} width="100rem" />
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">JavaScript<br />Language</Tooltip>}>
          <span className="d-inline-block">
            <img src={js} width="100rem" />
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">Firebase<br />Back-End</Tooltip>}>
          <span className="d-inline-block">
            <img src={firebase} width="100rem" />
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">MUI<br />Styling</Tooltip>}>
          <span className="d-inline-block">
            <img src={mui} width="100rem" />
          </span>
        </OverlayTrigger>


        {/* 
      <OverlayTrigger overlay={<Tooltip id="tooltip">React<br/>Front-End</Tooltip>}>
          <span className="d-inline-block">


            <Card style={{ width: '10rem' }}>
              <Card.Img src={react} />
            </Card>
          </span>
        </OverlayTrigger>


        <OverlayTrigger overlay={<Tooltip id="tooltip">React<br/>Front-End</Tooltip>}>
          <span className="d-inline-block">


            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={node} />
              <Card.Body>
                <Card.Title>React</Card.Title>

              </Card.Body>
            </Card>
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">React<br/>Front-End</Tooltip>}>
          <span className="d-inline-block">


            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={js} />
              <Card.Body>
                <Card.Title>React</Card.Title>

              </Card.Body>
            </Card>
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">React<br/>Front-End</Tooltip>}>
          <span className="d-inline-block">


            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={firebase} />
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
          Utilizing React to handle the front end. Reusable components to aid in faster production of user focused applications.
        </Card.Text>
              </Card.Body>
            </Card>
          </span>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id="tooltip">React<br/>Front-End</Tooltip>}>
          <span className="d-inline-block">


            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={mui} />
              <Card.Body>
                <Card.Title>React</Card.Title>

              </Card.Body>
            </Card>
          </span>
        </OverlayTrigger> */}



      </div>
      {/* 
<div className={aboutMe}>
<h3>About Me</h3> */}

      {/* <div className={aboutMeSection}>

<div className={aboutMeStack}>
<img src={react} />
<img src={node} />
<img src={js} />
<img src={firebase} />
<img src={mui} />
</div>

<div>
<p><br />+ Web Developer<br />
+ Computer Programming Diploma<br />
+ Front End & Back End<br />
+ Responsive Design<br />
+ User Experience<br />
+ Clean Code Implementations<br />
+ User Friendly Interfaces</p>
</div>
</div> 

</div>
*/}



      {/* <div className={skills}>
        <h3>Skills</h3>
        <div className={skillsSection}>
          <div>
            <p><span>Front End</span><br />React<br />Gatsby<br /></p>
            <p><span>Back End</span><br />Node<br />Express<br />FireBase<br /></p>
            <p><span>Data Base</span><br />MongoDB<br /></p>
          </div>
          <div>
            <p><span>Styling</span><br />MUI<br />Bootstrap<br /></p>
            <p><span>Hosting</span><br />AWS<br />GitHub<br />cPanel</p>
            <p><span>Languages</span><br />JavaScript<br /></p>
          </div>

        </div>

      </div> */}

    </div>
  )
}

export default about