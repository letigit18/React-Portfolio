import './skill.css'
const Skill = ()=>{
    return(
        <>
            <section className="skill-container" id='skills'>
               <div className="skill-title">
                    <h2>My Skills</h2>
               </div>
               <div className='box-container'>
                    <div className='skill-box'>
                            <h3>Frontend Skills</h3>
                            <div className='skill-type'>
                                <span>HTML</span>
                                <div className='skill-bar'>
                                    <span className='skillper html'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>CSS</span>
                                <div className='skill-bar'>
                                    <span className='skillper css'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Javascript</span>
                                <div className='skill-bar'>
                                    <span className='skillper js'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>JSX</span>
                                <div className='skill-bar'>
                                    <span className='skillper jsx'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>React JS</span>
                                <div className='skill-bar'>
                                    <span className='skillper react'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Redux</span>
                                <div className='skill-bar'>
                                    <span className='skillper redux'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>JQuery</span>
                                <div className='skill-bar'>
                                    <span className='skillper jquery'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Bootstrap</span>
                                <div className='skill-bar'>
                                    <span className='skillper redux'></span>
                                </div>
                            </div>
                    </div>
                    <div className='skill-box'>
                            <h3>Backend Skills</h3>
                            <div className='skill-type'>
                                <span>Node JS</span>
                                <div className='skill-bar'>
                                    <span className='skillper node'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Express JS</span>
                                <div className='skill-bar'>
                                    <span className='skillper express'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>PHP</span>
                                <div className='skill-bar'>
                                    <span className='skillper php'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Java</span>
                                <div className='skill-bar'>
                                    <span className='skillper java'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Python</span>
                                <div className='skill-bar'>
                                    <span className='skillper python'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>SQL</span>
                                <div className='skill-bar'>
                                    <span className='skillper sql'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Mongo DB</span>
                                <div className='skill-bar'>
                                    <span className='skillper mongo'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Git</span>
                                <div className='skill-bar'>
                                    <span className='skillper mongo'></span>
                                </div>
                            </div>
                    </div>
                    <div className='skill-box'>
                            <h3>Soft skills</h3>
                            <div className='skill-type'>
                                <span>Problem Solving</span>
                                <div className='skill-bar'>
                                    <span className='skillper ps'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Team work</span>
                                <div className='skill-bar'>
                                    <span className='skillper tw'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Communication</span>
                                <div className='skill-bar'>
                                    <span className='skillper communication'></span>
                                </div>
                            </div>
                            <div className='skill-type'>
                                <span>Project management</span>
                                <div className='skill-bar'>
                                    <span className='skillper pw'></span>
                                </div>
                            </div>
                    </div>
               </div>
              
            </section>
        </>
    )
}
export default Skill;