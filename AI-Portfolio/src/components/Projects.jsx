import React from 'react'
import fp from "../assets/FP-Mockup.png"
import pc from "../assets/PC-Mockup.png"
import synergist from "../assets/Sy-Mockup.png"

const Mockups = () => {
  return (
    <div className='mockups-main'>
      <div className='mockups-head'>
      <h1 className='mockup-title title'>Our projects
      <span className='mockup-txt-bg'>Our projects</span></h1> </div>
        <div className='mockups-projects'>
          <div className='mockup-img'>
            <img className='magicBorder' src={fp}/>
            </div>
            <div className='mockup-img'>
            <img className='magicBorder' src={pc}/>
            </div>
            <div className='mockup-img'>
            <img className='magicBorder' src={synergist}/>
            </div>
            <div className='mockup-img'>
            <img className='magicBorder' src={pc}/>
            </div>
            <div className='mockup-img'>
            <img className='magicBorder' src={synergist}/>
            </div>
        </div>

     

    </div>
  )
}

export default Mockups