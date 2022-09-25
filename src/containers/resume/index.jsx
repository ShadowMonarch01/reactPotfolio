import React,{useContext} from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../PageHeaderContent';
import './styles.scss'
import { useParams } from 'react-router-dom';
// import myPotfolioData from '../../projectinfo/proinfo';

import { AuthContext } from '../../helper/context';


const Resume = (props) =>{
    const {type} = useParams()
    // const stateParams = useLocation().state;
    const {images,describe,applink,appname} = useContext(AuthContext)
    // console.log(stateParams)
    // const Album = [stateParam.projectImgs]

    // const [imageArr,setImageArr] =useState([null])
    // setImageArr(stateParam.projectImgs)

    // useEffect(()=>{

    //     setImageArr(stateParam.projectImgs)
        
    // },[type])

    // const ArImgs = [
    //             {
    //                   id:1,
    //                 image:Image1    
    //             },
    //             {
    //                 id:2,
    //                 image:Image2
    //             },{
    //                 id:3,
    //                 image:Image3
    //             },{
    //                 id:4,
    //                 image:Image4
    //             },{
    //                 id:4,
    //                 image:Image5
    //             },
    //             {
    //                 id:5,
    //                 image:Image6
    //             },
    //             {
    //                 id:6,
    //                 image:Image7
    //             }
    //         ]    

    return(
        <section id='resume' className='resume'>

            <PageHeaderContent
            headerText= {`${type}`}
            icon ={<BsInfoCircleFill size={40}/>}
            />

            <div className='project__info'>

                <div className='container'>

                    <div className='infod'>
                        <p>{describe}</p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis perferendis odio illo, similique, accusantium modi facilis ipsa voluptates repellat eligendi nisi autem harum odit, dicta non totam? Hic, similique.</p> */}
                    </div>

                    <div className='linkd'>
                        <h2>Link:<a href={`${applink}`}>{appname}</a></h2>
                    </div>

                    <div className='imgd'>
                        { images.map((item)=>(
                            <div key={item.id}>
                                <img src={item.image? item.image:''}/>
                            </div>
                        )) }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Resume;