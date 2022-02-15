import React,{useState,useEffect} from 'react';
import "./Header.css";

import Button from '@mui/material/Button';

import { useHistory } from 'react-router';


export function Header(){ 
    const history =useHistory();
    const [select,setSelect]=useState([true,false,false,false])
    

    return (
        <div className="nav_bar">
        <div className="header">
            <div className="header__left">

                <h3>VINUPPRIYA BALACHANDRAN</h3>
               
            </div>
            

            <div className="header__right">
            <div className={select[0]? "heading select" :  "heading"} 
                    onClick={()=>{setSelect([true,false,false,false])
                            history.push("/")}} >
            ABOUT
            </div>
            <div className={select[1]? "heading select" :  "heading"} 
            onClick={()=>{
                        setSelect([false,true,false,false])     
                        history.push("/skill")}}>
            SKILLS
            </div>
            <div className={select[2]? "heading select" :  "heading"} 
            onClick={()=>{
                          setSelect([false,false,true,false])      
                        history.push("/project");
                    }}>
            PROJECTS
            </div>
            <div className={select[3]? "heading select" :  "heading"} 
            onClick={()=>{
                setSelect([false,false,false,true])
                    history.push("/contact")}}>
            CONTACT
            </div>
                
            </div>
        </div>
        </div>
    )
}

   
  