import React from 'react'
import {Hmidter, Impact, Midspace, Midlay, Pat,
Image2hold, Pres3, Image2a, Image2b} from './Footer.Element'
import feed1 from './feed1.jpg'
import sapa1 from './sapa1.jpg'

function Footer() {
  return (
      <>
   <Hmidter>
       <Impact>FOOTER NOTE </Impact>
       <Midspace>
       <Midlay>
        <Pat>We believe everyone should be able to live with dignity,<br/>
        without dependence. We are a Non-Governmental<br/>
        Organization, based in Lagos Nigeria. We strive to<br/>
        protect and feed the poor, advocate and enlighten<br/>
        communities, empower young people, serve as the<br/>
        voice to the voiceless, we give grants and scholarship,<br/>
        we serve as an outstretched arm of God, we bring<br/>
        succor and hope to the need</Pat>
        <Pres3>Read More</Pres3>
        </Midlay>
        <Image2hold>
            <Image2a src={sapa1}/>
            <Image2b src={feed1}/>
        </Image2hold>
        </Midspace>
      </Hmidter>
    </>
  )
}

export default Footer