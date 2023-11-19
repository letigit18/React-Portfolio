import './Testimonials.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Testimonials = ()=>{
    return(
        <div className='testimonial-container' id='testimonial'>
            <div className='sec-title'>
                <h2>Customers Testimonial</h2>
                
            </div>
            <section className="testimonials">
                <div className="container">
                    <div className='rating'>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <div className='body-text'>
                        <p className="comment">"Mr. Letera Tesfaye you have contributed a lot to our company in terms of 
                            your proffesionalism. We appreciate your creativeness, punctuality to take off the task and your presentation on the system
                            for our team was unforgettable. Hope you will bring great to our country in tech. Sector" 
                        </p>
                       
                       
                    </div>
                    <div className='container-image'>
                            
                            <div className='container-author'>
                              <span style={{fontSize: '11px'}}><strong>Gadisa Bekole</strong></span><br />
                              <i style={{fontSize: '10px', display: 'block'}}>Manager, <strong>Tigist Gizawu VAS</strong> <br /> Jemo, Addis Ababa, Ethiopia </i>
                            </div>
                            <div>
                              <img src='gado.jpg' alt='Gadisa image' />
                            </div>
                           
            
                        
                    </div>
                </div>
                <div className="container">
                <div className='rating'>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <div className='body-text'>
                        <p className="comment">"I wanna express my gratitude to you for the quality service you delivered to our team. 
                        We have got a remarkable Nutrition and Pyshichal Fitness content management system for our premium contents. Your continuing support
                        regarding the usage of the system and future work is always memorable. I wish you all the best dear Letera.
                        " 
                        </p>
                       
                       
                    </div>
                    <div className='container-image'>
                            
                            <div className='container-author'>
                              <span style={{fontSize: '11px'}}><strong>Mathewos Tezera</strong></span><br />
                              <i style={{fontSize: '10px', display: 'block'}}>Owner, <strong>Mathewos Tezera VAS</strong> <br /> Jemo, Addis Ababa, Ethiopia </i>
                            </div>
                            <div>
                              <img src='mati.png' alt='Mati image' />
                            </div>
                           
            
                        
                    </div>
                </div>
                <div className="container">
                <div className='rating'>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                      <i><FontAwesomeIcon icon={faStar} /></i>
                    </div>
                    <div className='body-text'>
                        <p className="comment">"I am cheerful by your service and appreciate your creativity. The website you 
                        developed to our company has been playing a vital role in promoting our products to our customers. I admire your loyalty
                        to deliver the service prior to the deadline and your reasonable cost.
                        Best wishes!
                        " 
                        </p>
                       
                       
                    </div>
                    <div className='container-image'>
                            
                            <div className='container-author'>
                              <span style={{fontSize: '11px'}}><strong>Benti Tesfaye</strong></span><br />
                              <i style={{fontSize: '10px', display: 'block'}}>Owner and CEO, <strong>BT Textile Factory</strong> <br /> Kaliti, Addis Ababa, Ethiopia </i>
                            </div>
                            <div>
                              <img src='benti.jpg' alt='Benti image' />
                            </div>
                           
            
                        
                    </div>
                   
                </div>
            </section>
        </div>
    )
}
export default Testimonials;