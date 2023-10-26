import React from "react";
import classes from './menu.module.css'
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export function Menu (){
    const { name } = useParams();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div>TAGS</div>
                <div>FILTERS</div>
                <div>FOODS</div>    
            </div>
            <Footer name={name}/>
        </div>
    )
}