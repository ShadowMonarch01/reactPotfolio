import React from 'react'
import Img from './pro.jpg'
import './styles.scss'
import { Link } from 'react-router-dom'
import {DiAndroid, DiMongodb, DiMysql} from 'react-icons/di'
import {FaDev, FaDatabase, FaPython,FaReact} from 'react-icons/fa'
import { SiMysql, SiFlask, SiFirebase } from 'react-icons/si';


const Home = () =>{
    return(
        <div className='home__myprofile'>
            
            {/* <div> */}

                <div className='container'>

                        <div className='pictured'>
                           
                            <img src={Img} alt="Myprofile" />
                        </div>

                        <div className='named'>
                            <h1>Gunn Trust</h1>
                        </div>

                        <div className='aboutd'>
                            <Link to={'/about'} className='navbar__container__logo'>
                                <button>About Me</button>
                            </Link> 
                        </div>

                        <div className='contactd'>
                            <Link to={'/portfolio'}>
                            <button>My Projects</button>
                            </Link>
                        </div>

                        <div className='devd'>
                            <h1>MOBILE APP DEVELOPER</h1>
                        </div>

                        <div className='icond'>
                            
                                <div>
                                    <div>
                                        <DiAndroid size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <FaDatabase size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <FaPython size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <FaReact size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <DiMongodb size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <DiMysql size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <SiMysql size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <SiFlask size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <SiFirebase size={60} color={"gold"}/>
                                    </div>
                                    <div>
                                        <FaDev size={60} color={"gold"}/>
                                    </div>
                                </div>

                        </div>

                </div>

            {/* </div> */}

        </div>
    )
}

export default Home;