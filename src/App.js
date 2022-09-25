import React from 'react'
import {Routes,Route} from "react-router-dom";
// import {Routes,Route,useLocation} from "react-router-dom";
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import About from './containers/about/index'
import Contact from './containers/contact/index'
import Home from './containers/home/index'
import Portfolio from './containers/portfolio/index'
import Resume from './containers/resume/index'
import Skills from './containers/skills/index'

import Navbar from './components/navBar';
import './App.scss'

// import particles from './utils.js/particles';

import { AuthProvider } from './helper/context';

const App = (props) =>{

    // const location = useLocation();

    // const handleInit = async (main) =>{
    //     await loadFull(main)
    // }

    // const Locate1 = location.pathname ==="/app1/home";
    // const Locate2 = location.pathname === "/";

    return(
        <div className='App'>
            {/* particle js */}

            
            {/* {
                Locate1 || Locate2 ? (
                    <Particles id='particles'   init={handleInit}/>
                ):null
            }
             */}

            {/* navbar */}
            <Navbar/>

            {/* page content */}
        <div className='App__main-page-content'>
        <AuthProvider>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume/project/:type' element={<Resume/>}/>
            <Route path='/skills' element={<Skills/>}/>
        </Routes>
        </AuthProvider>
        </div>
       </div>
    )
}

export default App;