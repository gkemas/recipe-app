import React from 'react';
import { AboutContainer } from './About.style';
import { StyledImage,InfoContainer } from './About.style'; 
import coding from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer>
      
      
        <StyledImage src={coding} alt="coderMan"  />
        <h1>Front End Developer <span style={{fontSize:'1.3rem', color:'wheat'}}>Gökhan</span></h1>
        <InfoContainer>
          <h3>I'm Gökhan.</h3>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>I've already known JS, ReactJS, NodeJS, MongoDB, SQL, Python, Agile Methodologies.</p>
            <h4> email:kemasgokhan@gmail.com </h4>
        </InfoContainer>
    </AboutContainer>
  )
}

export default About