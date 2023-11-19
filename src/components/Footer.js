import './footer.css'
import { faFacebook, faGithub, faLinkedin, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = ()=>{
    const date = new Date();
    const year = date.getFullYear;
    return(
        <>
          <footer className="footer">
            <div className="footer-container">
                <div className="about" >
                    <div className='title'>
                      About
                    </div>
                    <div className='detail'>
                      This website is a personal portfolio website that show case the skills and previous works
                      of the developer.
                    </div>
                </div>
                <div className="links">
                    <div className='title'>
                       Links
                    </div>
                    <div className='link-items'>
                        <a href='#'>Home</a>
                        <a href='#'>Portfolio</a>
                        <a href='#'>Skills</a>
                        <a href='#'>Contact</a>
                    </div>
                </div>
                <div className="social">
                  <div className='title'>
                    Follow me
                  </div>
                  <div className='social-links'>
                        <i><FontAwesomeIcon icon={faFacebook} /></i>
                        <i><FontAwesomeIcon icon={faGithub} /></i>
                        <i><FontAwesomeIcon icon={faTwitter} /></i>
                        <i><FontAwesomeIcon icon={faTelegram} /></i>
                  </div>
                </div>
            </div>
          
            <div className="copyright">
            
                &copy; 2023 Powered by Letera Tesfaye. All rights reserved.
            </div>
          </footer>

        </>
    )
}
export default Footer;