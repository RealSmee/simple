import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Clock from './Clock';
import Text from './Text';

class Home extends Component {



  state = {

    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
  }



  componentDidMount() {
    setInterval(() => {
      this.setClock()
    }, 1000);
  }

  setClock = () => {

    const currentDate = new Date;
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({ secondRatio: secondRatio = currentDate.getSeconds() / 60 })
    this.setState({ minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 })
    this.setState({ hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12 });


  }


  render() {
    const { secondRatio, minuteRatio, hourRatio } = this.state
    return (
    <>
      <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/> 

     <Text/>
</>

    );
  }

}


export default Home;
/*import profile from '../../assests/img/4.jpg';

const Home = () => {
  
  return (
    <div className="container-clock" >
       <div className="clock" >
      <span className='i'><b>1</b></span>
      <span  className='i'><b>2</b></span>
      <span  className='i'><b>3</b></span>
      <span className='i'><b>4</b></span>
      <span  className='i'><b>5</b></span>
      <span  className='i'><b>6</b></span>
      <span  className='i'><b>7</b></span>
      <span  className='i'><b>8</b></span>
      <span  className='i'><b>9</b></span>
      <span  className='i'><b>10</b></span>
      <span  className='i'><b>11</b></span>
      <span  className='i'><b>12</b></span>
        
        
      </div>
    </div>
  )
}

export default Home;*/



