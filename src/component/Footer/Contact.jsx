import React from 'react'
import './Contact.css';
import insta from '../../assests/instagram-line.png';
import tel from '../../assests/send-plane-line.png'
const Contact = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/*culome 1*/}
          <div className='col'>
            
            <ul className='list'>
              <li> <a href='#'><img src={tel} alt="profile" className=" w-15"/></a> </li>
              
              <li id='foot'>******</li>
              
            </ul>

          </div>
          {/*culome 1*/}
          <div className='col'>
            
            <ul className='list'>
              <li><a href='https://www.instagram.com/atefeh_amerii/'><img src={insta} alt="profile" className=" w-15 "/></a> </li>
              <li id='foot'><a  href='https://www.instagram.com/atefeh_amerii/'>@atefeh_amerii</a></li>
              </ul>

          </div>
          {/*culome 3*/}
          <div className='col'>
            <h2>Smee</h2>
            <h6>Atefeh Ameri </h6>
            
          </div>

        </div>
        <hr/>
        <div className='row'>
        <p className='col-sm'>
         &copy;{new Date().getFullYear()} SMEE | All right reserved | terms of service | privacy
        </p>
        </div>
      </div>
    </div>
  )
}

export default Contact