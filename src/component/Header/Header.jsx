import React  from 'react';
import './Header.css'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom';



const NavbarLink = [
    
    {
        id: 2,
        display: 'درباره من ',
        url: '/About'
    },
    {
        id: 1,
        display: 'صفحه اصلی',
        url: '/'
    }
]
function Header() {
    
   
    return (
        <header className='header'>


            <Container >
                {/*اینجا حتمااااا به container 
          flex باید بدی تا gap مال btn کار کنه کلا بیاذ بالا*/}
                <div className='container d-flex align-items-center justify-content-space-between'>
                    <div className='logo'>
                        Smee
                    </div>
                    {/*ا  be nav-menu to media query (responsive) style mide ke toggle beshe*/}
                    <div className="nav-menu">
                        <ul className='navbar-list'>
                            {
                                NavbarLink.map((item) => (
                                    <li key={item.id} className='navbar-item'>
                                        <Link className='Link' to={item.url}>{item.display}</Link>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>

                    {/*<div className='sing-in d-flex align-items-center gap-4'>
                        <button className='sing-btn'>ورود</button>
                        <span className="mobile-menu"><i class="ri-menu-5-line" onClick={menutoggle}></i></span>
                        </div>*/}
                </div>
               
                
              
            </Container>

        </header>
    )
}

export default Header
