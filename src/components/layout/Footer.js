import './Footer.css'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return(
        <footer className="footer">
            <ul className='social_list'>
                <li className='social_list'><FaFacebook /></li>
                <li className='social_list'><FaInstagram /></li>
                <li className='social_list'><FaLinkedin /></li>
            </ul>
            <p><span>Costs Projetos</span></p>
        </footer>
    )
}

export default Footer;