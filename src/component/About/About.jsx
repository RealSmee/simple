import React, { useState } from "react";
import './About.css';
import { Container, Row, Col } from "reactstrap";

import Skills from './Skills';


const About = () => {
  const [aboutFilter, setAboutFilter] = useState('ABOUT')
  return (
    <section  className='about' id="about">
      <Container>
        <Row>
          <Col lg='12' className='mb-5'><h2>درباره من</h2></Col>
          <Col lg='4' className='mb-3'>
            <div className="about__btns d-flex flex-column align-items-center">
              <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>درباره من</button>
             
              <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('SKILLS')} >مهارت ها</button>
            </div>
          </Col>

          <Col lg='8' md='9'>
            {
              aboutFilter === 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
               
                <div className="about__content w-75">
                  <h6>سلام من عاطفه ام حدود یک سالی هست که دارم طراحی سایت و توسعه وب رو یاد میگیرم .. 
                    و همچنان در حال یادگیری ام!
                  </h6>
                
                  
                {/*<div className="social__links">
                    <h6 className="mb-3">connect with me :</h6>
                    <span><a href="#">1</a></span>
                    <span><a href="#">2</a></span>
                    <span><a href="#">3</a></span>
                    <span><a href="#">4</a></span>
                    <span><a href="#">5</a></span>
                  </div>*/}
                </div>


              </div>
            }
           
            {
              aboutFilter === 'SKILLS' && <Skills />
            }
            


          </Col>
          
        </Row>
      </Container>
    </section>
  );
}
export default About;