import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css'

const Header = (props) => {


    return ( 
        <header >
            <nav>
                <div className='logo'>
                    <img src={require('../images/2c4538a84923b74393c4b426d62f577a.jpg')} alt='logoCheems'/>
                    <h1>Alvaro Bishop Macias</h1>
                </div>
                <div className='links'>
                    <Link className='link' to={`/`}>Curriculum Vitae</Link>
                    <Link className='link' to={`/portafolio`}>Portafolio</Link>
                    <Link className='link' to={`/contact`}>Contact</Link>
                </div>
            </nav>
        </header>
    );
    
}


export default Header;