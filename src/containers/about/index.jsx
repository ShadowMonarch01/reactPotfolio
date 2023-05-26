import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../PageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.scss'
import {DiApple, DiAndroid, DiMongodb, DiMysql} from 'react-icons/di'
import {FaDev, FaDatabase, FaPython,FaReact} from 'react-icons/fa'
import { SiMysql, SiFlask, SiFirebase } from 'react-icons/si';



const personalDetails =[
    {
        label:"Name",
        value:"Trust Gunn"
    },
    {
        label:"Email",
        value:"gunngptrust@gmail.com"
    },
    {
        label:"Contact No",
        value:"+2348107329226"
    },

]

const jobSummary = 'I Am a Software Developer with 5 years of experience ,I have worked on several mobile apps and web projects using React Native and React js. I am also proficient in Python, Flask, Mysql, Sql, Mongo Db and FireBase.I have worked as a freelance backend developer with other developers to help complete and ship projects to clients'

const About = () =>{
    return(
        <section id='about' className='about'>
            <PageHeaderContent
            headerText= "About Me"
            icon ={<BsInfoCircleFill size={40}/>}
            />

            <div className='about__content'>

            
              <div className='about__content__personalWrapper'>
              <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform:"translateX(-500px)",
                    }}
                    end={{
                        transform:"translatex(0px)",
                    }}>
                <h3 className='personalInformationHeaderText'>Personal Information</h3>
                {/* <div className='withImage'> */}
                {/* <img src={require('../../../pics/potfolioimg.png')} width='240px' height={'280px'}/> */}
                <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <span className='title'>{item.label}</span>
                                <span className='value'>{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
                {/* </div> */}

                </Animate>
                

                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform:"translateX(500px)",
                    }}
                    end={{
                        transform:"translatex(0px)",
                    }}
                >
                <div className='about__conttent'>
                    <h3>Mobile App Developer</h3>
                    <p>{jobSummary}</p>
                </div>
                </Animate>
              </div>

              <div className='about__content__servicesWrapper'>
                <div className='about__content__servicesWrapper__innerContent'>
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
                </div>
                
              </div>
            </div>

        </section>

    )
}

export default About;