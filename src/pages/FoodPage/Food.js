import React from "react";
import classes from './food.module.css';
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export function Food(){
    const { name } = useParams();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div>image</div>
                <div>Name & desciption</div>
                <div>Rating & Time</div>
                <div>Add to Cart</div>
            </div>
            <Footer name={name} />
        </div>
    )
}