import React from "react";
import classes from './search.module.css';
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export const Search = () => {
    const { name } = useParams();
    
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div>Search Bar</div>
                <div>Suggestions</div>
                <div>Search Result</div>
            </div>
            <Footer name={name}/>
        </div>
    )
}