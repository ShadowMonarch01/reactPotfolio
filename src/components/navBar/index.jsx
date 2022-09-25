import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {DiAndroid} from 'react-icons/di'
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './styles.scss'

const data = [
    {
        label: 'HOME',
        to: '/home'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    // {
    //     label: 'NAVIGATION1',
    //     to: '/app1'
    // },
    // {
    //     label: 'NAVIGATION2',
    //     to: '/app2'
    // },
    // {
    //     label: 'NAVIGATION3',
    //     to: '/app3'
    // },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    // {
    //     label: 'RESUME',
    //     to: '/app1/resume'
    // },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    // {
    //     label: 'CONTACT',
    //     to: '/app1/contact'
    // },
]
const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }



    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                        <DiAndroid size={40} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li className='navbar__container__menu__item'>
                                <Link className='navbar__container__menu__item__links' to={item.to} onClick={handleToggleIcon}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;