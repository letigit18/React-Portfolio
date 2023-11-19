import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import {Link} from 'react-scroll'
const Navbar = ()=>{
    const [active, setActive] = useState(false)
    const [toggle, setToggle] =useState(false)
    const handleClick = ()=>{
        setActive(!active);
        handleToggle();
    }
    const handleToggle = ()=>{
        setToggle(!toggle);
    }
    const closeMenu = ()=>{
        setActive(false)
        handleToggle();
    }
    return(
        <header>
            <nav className="nav-bar">
                <div className="logo">
                    Letera Tesfaye
                </div>
                <ul className={active ? 'menu active' : 'menu'} >
                    <li className='menu-item'>
                        <Link className='link' to="hero" spy={true} smooth={true} offset={-60} duration={400} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='menu-item'>
                        <Link className='link' to="testimonial" spy={true} smooth={true} offset={-60} duration={400} onClick={closeMenu}>Testimonials</Link>
                    </li>
                    <li className='menu-item'>
                        <Link className='link' to="portfolio" spy={true} smooth={true} offset={-60} duration={400} onClick={closeMenu}>Portfolio</Link>
                    </li>
                  
                    <li className='menu-item'><Link className='link' to="/">Gallery</Link>
                        <ul className="dropdown">
                          <li className='menu-item'><Link className='link' to="#">Photo Gallery</Link></li>
                          <li className='menu-item'><Link className='link' to="#">Video Gallery</Link></li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <Link className='link' to="skills" spy={true} smooth={true} offset={-60} duration={400} onClick={closeMenu}>Skills</Link>
                        
                    </li>
                  
                    <li className='menu-item'>
                        <Link className='link' to="contact" spy={true} smooth={true} offset={-60} duration={400} onClick={closeMenu}>Contact</Link>
                    </li>
                   
                </ul>
                <div className={toggle ? 'hamburger active': 'hamburger'} onClick={handleClick}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
               
            </nav>
        </header>
    )
}
export default Navbar;