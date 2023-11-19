import './portfolio1.css'
import { useState } from 'react'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
const Portfolio1 = ()=>{
    const [vidMedia, setVidMedia] = useState(false)
    const closeVideo = ()=>{
        const vid = document.getElementById('video');
        setVidMedia(!vidMedia);
        vid.pause();
    }
    const openVideo = () =>{
        
        setVidMedia(!vidMedia)
    }
    return(
         <section className='port-container' id='portfolio'>
            <div className='port-header'>
                <h2>Portfolio</h2>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-header'>
                        Health Advisory and health content management system
                    </div>
                    <div className='card-body'>
                        {/* <span className='title'>Tech stack used:</span>
                        <p>  EJS Templating Engine, CSS, Express JS, MySQL Database and MVC design pattern.</p>
                        <span className='title'>Features:</span>
                        <p> The system stores premium videos and blogs posted by professionals which is viewed only by subscribed users.
                           The admin confirms the post of the professionals and manages the subscribed users and contents of the system. 
                           The subscription of the user is made by sending SMS to 8375 to the SMS gateway of Ethio Telecom. Then, the system
                           authenticates the user by checking the subscribed users from the ethi telecom sms server through API integration we 
                           have built into the system.  

                        </p> */}
                      <div className={vidMedia ? 'video-container active' : 'video-container'}>
                        <div className='video-cont'>
                          <video src='sample.mp4' id='video' controls autoPlay />
                        </div>
                      
                        <div className='close' onClick={closeVideo}>
                            x
                        </div>
                      </div> 
                    </div>
                               
                    <div className='card-footer'>
                        <button className='btn-primary' onClick={openVideo}>Watch Video</button>
                        <button className='btn view-detail'>Private Github Link</button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        Nutrition and Physichal Fitness Content Servision Provision
                    </div>
                    <div className='card-body'>
                        <span className='title'>Tech stack used:</span>
                        <p>  EJS Templating Engine, CSS, Express JS, MySQL Database and MVC design pattern.</p>
                        <span className='title'>Features:</span>
                        <p> The system stores premium videos and blogs posted by professionals which is viewed only by subscribed users.
                           The admin confirms the post of the professionals and manages the subscribed users and contents of the system. 
                           The subscription of the user is made by sending SMS to 8375 to the SMS gateway of Ethio Telecom. Then, the system
                           authenticates the user by checking the subscribed users from the ethi telecom sms server through API integration we 
                           have built into the system.  

                        </p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn-primary'> <FontAwesomeIcon icon={faVideo} /> Watch video</button>
                        <button className='btn view-detail'><FontAwesomeIcon icon={faGithub} /> Private Github Link</button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        BT Textile Factory Website
                    </div>
                    <div className='card-body'>
                        <span className='title'>Tech stack used:</span>
                        <p>  EJS Templating Engine, CSS, Express JS, MySQL Database and MVC design pattern.</p>
                        <span className='title'>Features:</span>
                        <p> The system stores premium videos and blogs posted by professionals which is viewed only by subscribed users.
                           The admin confirms the post of the professionals and manages the subscribed users and contents of the system. 
                           The subscription of the user is made by sending SMS to 8375 to the SMS gateway of Ethio Telecom. Then, the system
                           authenticates the user by checking the subscribed users from the ethi telecom sms server through API integration we 
                           have built into the system.  

                        </p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn-primary'>Watch video</button>
                        <button className='btn view-detail'>Private Github Link</button>
                    </div>
                </div>
            </div>
            <div className='card-container card2'>
                <div className='card'>
                    <div className='card-header'>
                        School Management System (on progress)
                    </div>
                    <div className='card-body'>
                        <span className='title'>Tech stack used:</span>
                        <p>  EJS Templating Engine, CSS, Express JS, MySQL Database and MVC design pattern.</p>
                        <span className='title'>Features:</span>
                        <p> The system stores premium videos and blogs posted by professionals which is viewed only by subscribed users.
                           The admin confirms the post of the professionals and manages the subscribed users and contents of the system. 
                           The subscription of the user is made by sending SMS to 8375 to the SMS gateway of Ethio Telecom. Then, the system
                           authenticates the user by checking the subscribed users from the ethi telecom sms server through API integration we 
                           have built into the system.  

                        </p>
                        

                    </div>
                    <div className='card-footer'>
                        <button className='btn-primary'>View Detail</button>
                        <button className='btn view-detail'>Private Github Link</button>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        Database Replication Project for Awash Bank
                    </div>
                    <div className='card-body'>
                        <span className='title'>DBMS used:</span>
                        <p>  Microsoft SQL Server</p>
                        <span className='title'>Features:</span>
                        <p> 
                            We have implemented transactional replication on the SQL server 2014.  
                        </p>
                        <br />
                        <a href='Database_replication.pdf' style={{color: 'blue', fontWeight: 'bold'}}>Open PDF</a>
                    </div>
                    
                </div>
             
            </div>
           
         </section>
        
    )
}
export default Portfolio1;