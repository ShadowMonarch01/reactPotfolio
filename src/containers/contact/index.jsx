import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../PageHeaderContent';

const Contact = () =>{
    return(
        <section id='contact' className='contact'>

            <PageHeaderContent
            headerText= "Contact Me"
            icon ={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}

export default Contact;



// import React from 'react'
// import Img from './pro.jpg'
// import './styles.scss'
// import {DiAndroid, DiMongodb, DiMysql} from 'react-icons/di'
// import {FaDev, FaDatabase, FaPython,FaReact} from 'react-icons/fa'
// import { SiMysql, SiFlask, SiFirebase } from 'react-icons/si';

// const Home = () =>{
//     return(
//         <div className='home__myprofile'>
            
//             <div className='home__myprofile__view'>

//                 <div className='owner'>
//                     <img src={Img} alt="Myprofile" />
                    
//                     <button>About Me</button>
//                 </div>
                
//                 <div className='iconsout'>
//                     <h1>MOBILE APP DEVELOPER</h1>

//                     <div>
//                         <div>
//                             <DiAndroid size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <FaDatabase size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <FaPython size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <FaReact size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <DiMongodb size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <DiMysql size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <SiMysql size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <SiFlask size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <SiFirebase size={60} color={"gold"}/>
//                         </div>
//                         <div>
//                             <FaDev size={60} color={"gold"}/>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Home;