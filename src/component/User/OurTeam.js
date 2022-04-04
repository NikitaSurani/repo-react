import React from 'react'
// import R1 from './R1'
import Review from './Review'
import './teamstyle.css'
import khushi from '../image/khushiimg.jpeg'
import nikita from '../image/nikitaimg.png'
import zeel from '../image/zeelimg.png'

const OurTeam = () => {
    return (
        <div>
            <div className="tmain">
                <div className="container teammain">
                    <div className="section-title">
                        <h1 className='th1'>Meet Our Team</h1>
                    </div>

                    <div className="row">


                        <div className="column teamcolumn">
                            <div className="team">
                                <div className="team-img">
                                    <img src={khushi} alt="Team Image"/>
                                </div>
                                <div className="team-content">
                                    <h2 className='th2'>Khushali</h2>
                                    <h3 className='th3'>Full Stack Developer</h3>
                                    <p className='tp'>A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application.</p>
                                    <h4 className='th4'>khushi2806@gmail.com</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="team">
                                <div className="team-img">
                                    <img src={nikita} alt="Team Image"/>
                                </div>
                                <div className="team-content">
                                    <h2 className='th2'>Nikita</h2>
                                    <h3 className='th3'>Full Stack Developer</h3>
                                    <p className='tp'>A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application.</p>
                                    <h4 className='th4'>nikitasurani16@gmail.com</h4>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="team">
                                <div className="team-img">
                                    <img src={zeel} alt="Team Image"/>
                                </div>
                                <div className="team-content">
                                    <h2 className='th2'>Zeel</h2>
                                    <h3 className='th3'>Full Stack Developer</h3>
                                    <p className='tp'>A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application.</p>
                                    <h4 className='th4'>zeelvashi02@gmail.com</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Review />
            {/* <R1/> */}
        </div>
    )
}

export default OurTeam