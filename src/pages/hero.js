import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'
import { heroPage } from '../styles/hero.module.css'
import '../styles/global.css'



function hero() {

  return (
    <div className={heroPage}>

      <div>
        <h1>Looking for a web developer?</h1>
        <h3>Hello, my name is <span>Imad</span> and I am here to help.</h3>
        <p>I am a Full Stack Web Developer utilizing JavaScript and React.
        I work with both front-end and back-end technologies.
        Focusing on ui/ux when building web applications.
        Find out how I helped other companies below.</p>

        <div style={{textAlign: "center"}}>
        <Link to='/#projects'><Button variant="outlined" size="lg">View Projects</Button></Link>
        </div>

      </div>

    </div>
  )
}

export default hero