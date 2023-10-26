import React from "react";
import classes from './cart.module.css'
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export function Cart (){
    const { name } = useParams();

    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div>Cart Items</div>
                <div>Bill</div>
                <div>Pay Bill</div>
            </div>
            <Footer name={name} />
        </div>
    )
}   
