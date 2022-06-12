import React from 'react';

//style
import './About.css'

function About(props) {
    return (
        <article className='about-section-container container row d-flex justify-content-center align-items-center p-3 typewriter '>
            <div className="col text-center ">
                <div className="row about-title ms-5 mb-3 mt-5 ">
                    <div className='row row-cols-3 text-center' >
                        <div className="col-3 col-sm-3 col-md-3 col-lg-2">
                            <img className='img-fluid' src="./dev.png" alt="" />
                        </div>
                        <div className='col-12 col-sm-3 col-md-2 col-lg-12 d-flex align-items-center ' >
                            <h2 className='fs-1 fw-bolder text-start mb-0'>
                                Hello,
                            </h2>
                        </div>
                        <div className="col-12 col-sm-6 col-md-7 col-lg-12  d-flex align-items-center justify-content-center  ">
                            <span className='col-12 text-start mb-0 fs-3 fw-bold'>
                                I'm James
                            </span> 
                        </div>
                    </div>
                </div>
                <div className="row text-start ms-5">
                    <p className='mb-1' >
                        I am a Front-End developer.
                        <br />
                        I encode your ideas into reality.
                        <br />
                        Currently designing my works using MERN stack technology.
                    </p>
                        <br />
                    {/* <p className='mb-1'>
                        I encode your ideas into reality.
                    </p> */}
                </div>
                <div className="row text-start ms-5">
                    <div className="col">
                        {/* <p>
                            Currently designing my works using MERN stack technology.
                        </p> */}
                    </div>
                </div>
                <div className="row td-flex justify-content-end " >
                    <div className="col-3 text-end ms-1 ">
                        <img className='img-fluid ' src="./MERN-logo.png" alt="" />
                    </div>
                </div>
            </div>
            
        </article>
    );
}

export default About;