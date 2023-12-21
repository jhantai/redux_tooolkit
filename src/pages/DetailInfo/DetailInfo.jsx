import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneCharacter} from "../../requests/getOneCharacter/getOneCharacter";
import {useNavigate} from "react-router-dom";
import  {  detailSlice, setDetail } from '../../features/data/detailedSlice';
import {detailedSlice} from '../../features/data/detailedSlice'; 
import './Detailimfo.css'

const DetailInfo = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.data)
    const detail = useSelector((state) => state.detail.detail)
    const id = useSelector((state) => state.id.id)
    const navigate = useNavigate()

    useEffect(() => {
        ( async () => {
            try{
        
                const result = await getOneCharacter(id)
              dispatch(setDetail(result))
              } catch(e){
                if(e.response.status === 400){
                  navigate('/') 
                }
              }finally{
                
              } 
            })()
          },[])
          return (
            <div>
            {detail &&  
              <div className='information'>
                <div>{data.fullName}</div>  
                <img src={detail.imageUrl} className="heroImg" alt="" />  
                <div className="desk">  
                  <div className="aspects">  
                    <p>ID</p>  
                    <p className="detailed-info">{detail.id}</p>  
                  </div>  
                  <div className="aspects">  
                    <p>Full name</p>  
                    <p className="detailed-info" >{detail.fullName}</p>  
                  </div>  
                  <div className="aspects">  
                    <p>Title</p>  
                    <p className="detailed-info" >{detail.title}</p>  
                  </div>  
                </div>  
              </div> 

            }
            </div>
          );
};

export default DetailInfo;