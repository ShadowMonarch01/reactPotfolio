import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../PageHeaderContent';
import './styles.scss'
// import MobileImg from './mobileimgs.png'
// import WebImg from './webimgs.png'
import { useState,useContext } from 'react';

import { AuthContext } from '../../helper/context';
import myPotfolioData from '../../projectinfo/proinfo';
import { Link } from 'react-router-dom';

// const prortfolioData = [
//     {
//         id:2,
//         name:"UIApp",
//         image: MobileImg,
//         link:''
//     },
//     {
//         id:3,
//         name:"EcommerceApp",
//         image: WebImg,
//         link:''
//     },
//     {
//         id:2,
//         name:"NotesApp",
//         image: MobileImg,
//         link:''
//     },
//     {
//         id:3,
//         name:"WbePotfolio",
//         image: WebImg,
//         link:''
//     },
//     {
//         id:2,
//         name:"FirebaseChat",
//         image: MobileImg,
//         link:''
//     },
//     {
//         id:3,
//         name:"ToDoSite",
//         image: WebImg,
//         link:''
//     }
// ]

const filterData = [
    {
        filterId:1,
        label:'All'
    },
    {
        filterId:2,
        label:'Mobile'
    },
    {
        filterId:3,
        label:'Web'
    },
]

const Portfolio = (props) =>{
    const {setImages,
        setDescribe,
        setAppLink,
        setAppname} = useContext(AuthContext)

    const [filteredvalue,setFilteredValue] = useState(1)
    const [hoverValue,setHoverValue] = useState(null)

    function handleFilter(currentId){
        setFilteredValue(currentId)
    }

    function handleHover(index){
        setHoverValue(index)
    }

    const filteredItems = filteredvalue === 1 ? myPotfolioData :
    myPotfolioData.filter(item=>item.id ===filteredvalue)


    return(
        <section id='portfolio' className='portfolio'>

            <PageHeaderContent
            headerText= "My Portfolio"
            icon ={<BsInfoCircleFill size={40}/>}
            />
            <div className='portfolio__content'>
                <ul className='portfolio__content__filter'>

                    {
                        filterData.map(item=>(
                            <li className={item.filterId===filteredvalue ? 'active':''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className='portfolio__content__cards'>
                    {
                        filteredItems.map((item,index)=>(
                            <div 
                                className='portfolio__content__cards__item' 
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={()=>handleHover(index)}
                                onMouseLeave={()=>handleHover(null)}
                                >
                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a>
                                        <img alt='dumm data' src={item.image}/>
                                    </a>
                                </div>
                                <div className='overlay'>
                                    {
                                        index === hoverValue &&(
                                            <div>
                                                <p>{item.name}</p>
                                                <Link to={{
                                                    // pathname:`/app1/resume/project/${item.name}`,
                                                    pathname:item.name==='Potfolio Site'? '/home':`/resume/project/${item.name}`,
                                                    // state:{
                                                    //     projectDetails:""+item.details,
                                                    //     projectImgs:item.imagesAr,
                                                    //     projectLink:item.link
                                                    // },
                                                    
                                                }}>
                                               
                                                <button
                                                    onClick={()=>{
                                                        if(item.name!=='Potfolio Site'){
                                                        let arr = item.imagesAr
                                                        let det = item.details
                                                        let lin = item.link
                                                        let nme = item.name
                                                        setImages(arr)
                                                        setDescribe(det)
                                                        setAppLink(lin)
                                                        setAppname(nme)
                                                        console.log('khyvdsjkgfkbksbk')
                                                        console.log(item)
                                                        }
                                                    }}
                                                >ViewProject</button>

                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;