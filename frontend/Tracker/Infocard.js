import React from 'react';
import {Card,CardContent,Typography} from "@material-ui/core";
import "./InfoCard.css";

function Infocard({title,isRed,active,no_of_cases,...props}) {
    return (
        <Card  
        onClick={props.onClick}   className={`infoCard  ${active && 'infoCard--selected'} 
        ${isRed && "infoCard--red"}`}>
            <CardContent>
            {/* Title */}
            <Typography className="infoCard_title" color="textSecondary">{title}</Typography>
        

            {/*No of cases*/}
            <h2 className={`infoCard__cases ${!isRed && "infoCard__cases--green"}`}>{no_of_cases}</h2>

            {/* 1.2M Total */}
            
            </CardContent>
        </Card>  
    );
}


export default Infocard
