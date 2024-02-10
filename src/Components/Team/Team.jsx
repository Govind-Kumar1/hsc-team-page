import React from 'react'
import Marquee from '../marquee/marquee'
// import img1 from './download.jpeg'
// import img2 from './img.jpg'
import './Team.css'
import Card from '../Card/Card'
const Team = () => {
  return (
    <>
      <div> <h1>Teams</h1></div>
    <div className='team-contents'>
    <Card name="Govind Kumar" role="Web Developer" />

   <div className='sec-team'>
   <h3> Ex Sec.</h3>
   <Card  className="ex-sec"name="Sukrit Prakash" role="Web Developer" />
  
   <Card className="ex-sec" name="Sukrit Prakash" role="Web Developer" />
   </div>
    </div>
    <div><Marquee>
   
      </Marquee></div>

      
    </>
  )
}

export default Team
