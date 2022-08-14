import './App.css';
import {BrowserRouter as Router,Routes, Link, Route} from 'react-router-dom';
import Header from './component/Header/Header';
/*import About from './component/About/About';
import Home from './component/Home/Home';*/
import Contact from './component/Footer/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';






function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        
    <Router>
    <Header/>
    
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        

        <Route exact path='About' element={<About/>}/>
        
       

     
        
      </Routes>
      
  </Router>
  </div>
  <Contact/>
  </div>
  );
}

export default App;
