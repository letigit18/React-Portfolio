import './contact.css'
import { faFacebook, faGithub, faLinkedin, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faLocationArrow, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Contact = ()=>{
    return(
        <>
            <section className='contact-container' id='contact'>
                <div className='header'>
                    <h2>Contact</h2>
                </div>
                <div className='contact-box'>
                    <div className='social-container'>
                        <h4 style={{color: '#ff6600'}}>Contact details:</h4>
                        <div className='about'>
                        
                            <div className='social'>
                                <h5><FontAwesomeIcon icon={faUsers} /> Social Media</h5>
                                <div className='social-icons' style={{marginTop: '10px'}}>
                                <Link to="https://www.facebook.com/lati.tesfaye" ><i><FontAwesomeIcon icon={faFacebook} /></i></Link>
                                <Link to="https://www.github.com/letigit18" ><i><FontAwesomeIcon icon={faGithub} /></i></Link>
                                <i><FontAwesomeIcon icon={faTwitter} /></i>
                                <i><FontAwesomeIcon icon={faTelegram} /></i>
                                </div>
                            </div>
                            <div className='phone'>
                                <h5><FontAwesomeIcon icon={faPhone} /> Mobile Number:</h5>
                                <div style={{marginTop: '5px'}}>
                                <i>+251910985181</i><br />
                                <i>+251707985181</i>
                                </div>
                               
                            </div>
                        </div>
                        <div className='about2'>
                            <div className='email-container'>
                                <h5><FontAwesomeIcon icon={faEnvelope} /> Email</h5>
                                <div style={{marginTop: '10px'}}>
                                <i>leti.tesfaye18@gmail.com</i>
                                </div>
                                
                            </div>
                            <div className='location-container'>
                                <h5><FontAwesomeIcon icon={faLocationArrow} /> Location</h5>
                                <div style={{marginTop: '10px'}}>
                                <i>Addis Ababa, Ethiopia</i>
                                </div>
                            </div>
                         
                        </div>

                    </div>
                    
                    
                    <div className='form-container'>
                        <h4 style={{color: '#ff6600'}}>Please Send your message here:
                      
                        </h4>
                        <form>
                            <label htmlFor='fname' className='form-control'>Full name</label>
                            <input type='text'  className='form-control' placeholder='Enter you full name.' id='fname' name='fname' />
                            <label htmlFor='email'  className='form-control'>Email</label>
                            <input type='email'  className='form-control' placeholder='Enter you email.' id='email' name='email' />
                            <label htmlFor='comment'  className='form-control'>Comment</label>
                            <textarea className='form-control' rows={10}>

                            </textarea>
                            <input type='submit' value={'Send'} name='submit' className='btn-send' />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;