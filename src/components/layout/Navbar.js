/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';

import logo from '../../img/costs_logo.png';
import Container from './Container';
import './Navbar.css'

function Navbar(){
    return(
        <nav className='navbar'>
            <Container>
                    <Link to="/">
                        <img src={logo}/>
                    </Link>
                    <ul className='list'>
                        <li className='item'>
                            <Link to="/">Home</Link>        
                        </li>
                        <li className='item'>
                            <Link to="/projects">Projetos</Link>        
                        </li>
                        <li className='item'>
                            <Link to="/company">Empresa</Link>
                        </li>
                        <li className='item'>
                            <Link to="/contact">Contato</Link>
                        </li>
                        
                    </ul>
                    
                    </Container>
        </nav>
    )
}

export default Navbar;
