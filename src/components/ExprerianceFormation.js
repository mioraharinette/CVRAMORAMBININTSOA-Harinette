import React from "react";
import './ExprerianceFormation.css'
import DataFormation from "../datas/Formation";
import Formation from "./Formation";
import DataExperiance from "../datas/Experiances";
import Experiance from "./Experiance";

function ExprerianceFormation() {
    return(
    <>
        <Formation datas={DataFormation}/>  
        <Experiance datas={DataExperiance}/>  
    </>
    )
    
}
export default ExprerianceFormation;