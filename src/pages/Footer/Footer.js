import React from "react";
import classes from './footer.module.css';
import { AiOutlineHome,AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

export default function Footer({name}){

    let navigate = useNavigate();

    const handleClickH = () => {
        navigate('/'+name+'/Home');
    }
    const handleClickM = () => {
        navigate('/'+name+'/Menu')
    }
    const handleClickS = () => {
        navigate('/'+name+'/Search')

    }
    const handleClickC = () => {
        navigate('/'+name+'/Cart')
    }

    return (
        <div className={classes.container}>
            <div className={classes.box} onClick={handleClickH} >
                <AiOutlineHome className={[classes.Home, classes.icon, classes['d-flex-c']].join(' ')}/>    
            </div>
            <div className={classes.box} onClick={handleClickM}>
                <AiOutlineMenu className={[classes.Menu, classes.icon, classes['d-flex-c']].join(' ')}/>
            </div>
            <div className={classes.box} onClick={handleClickS}>
                <AiOutlineSearch className={[classes.Search, classes.icon, classes['d-flex-c']].join(' ')}/>
            </div>
            <div className={classes.box} onClick={handleClickC}>
                <AiOutlineShoppingCart className={[classes.Cart, classes.icon, classes['d-flex-c']].join(' ')}/>   
            </div>
        </div>
    )
}