import React, {useEffect, useReducer} from "react";
import classes from './search.module.css';
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import SearchComponent from "../../components/Search/SearchComponent";
import BestSeller from "../../components/BestSeller/BestSeller";
import { getBestSellers } from "../../services/MenuService";
import Add from "../../components/Add/Add";
import { getAdds } from "../../services/MenuService";

const initialState = {
    Popular: [],
    Adds: [],

}

const reducer = (state,action) => {
    switch (action.type) {
        case 'BESTSELLER_LOADED':
            return {...state, Popular: action.payload }
        case 'ADDS_LOADED':
            return {...state, Adds: action.payload }
        default:
            return state;
    }
}

export const Search = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {Popular, Adds} = state ;
    const { name } = useParams();

    useEffect(() => {
        getBestSellers().then(Popular => dispatch({type:'BESTSELLER_LOADED', payload: Popular}))

        getAdds().then(Adds => dispatch({type:'ADDS_LOADED', payload: Adds}))
        },[name]
    )
    
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <SearchComponent name={name} />
                <Add adds={Adds}/>
                <BestSeller bestseller={Popular} name={name} />
            </div>
            <Footer name={name}/>
        </div>
    )
}