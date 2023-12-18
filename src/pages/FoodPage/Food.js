import React, { useEffect, useState} from "react";
import classes from './food.module.css';
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getByTag } from "../../services/MenuService";
import Item from "../../components/Items/Item";
import { MdOutlineArrowBack } from "react-icons/md";

const Food = () => {
    const [Food, setFood] = useState({ options:[]});
    const { name, foodid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getByTag(foodid).then(setFood);
    },[foodid]
    );

    return (

            <div className={classes.container}>
                <div className={classes.goback} onClick={() => navigate(-1)} >
                    <MdOutlineArrowBack />
                    <span> Back</span>
                </div>
                <div className={classes.content}>
                    <Item data={Food} />
                </div>
                <Footer name={name} />
            </div>

    )
}
export default Food ;