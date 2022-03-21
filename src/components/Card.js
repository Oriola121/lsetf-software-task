import React from 'react'
import styled from 'styled-components'
import feed from './feed.jpg'
import Mis from './mis.png'
import Vis from './vis.png'
import Vol from './vol.png'
function Card() {
  return (
    <>
    <Htops>
        <Ha>
            <Hea>We make lives and<br/>communities better</Hea>
            <Par>At the core of our values, is the utmost goal of making individual lives,<br/>
            whether old or young, and communities of people, better than we meet it.</Par>
            <ButNav>
            <Pres>Donate</Pres>
            <Pres2>Read More</Pres2>
            </ButNav>
        </Ha>   
    </Htops>
    </>
  )
}

export default Card

const Htops = styled.div`
height: 500px;
width: 100%;
background: url(${feed});
background-position: center;
background-size: cover;
`
const Ha = styled.div`
width: 100%;
height: 100%;
background-color: #1E3068;
opacity: 80%;
display: flex;
flex-direction: column;
justify-content: center;
`

const Hea = styled.div`
color: white;
font-size: 40px;
font-weight: bolder;
line-height: 1;
margin-left: 5rem;
margin-top: -10px;
`
const Par = styled.div`
color: white;
margin-left: 5rem;
margin-top: 10px;
`
const ButNav = styled.div`
margin-left: 5rem;
margin-top: 50px;
display: flex;
align-items: center;
`
const Pres = styled.button`
background-color: #3AB54A;
border-color: transparent;
color: white;
height: 35px;
width: 100px;
border-radius: 8px;
margin-right: 10px;
`
const Pres2 = styled.button`
background-color: transparent;
border-color: white;
color: white;
height: 35px;
width: 100px;
border-radius: 8px;
`