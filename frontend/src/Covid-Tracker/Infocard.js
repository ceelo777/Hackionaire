import React from 'react';
import {Card,CardContent,Typography} from "@material-ui/core";
import "./InfoCard.css";

function Infocard({title,isRed,active,no_of_cases,...props}) {
    return (
        <Card  
        onClick={props.onClick} 
          className={`infoCard  ${active && "infoCard--selected"} ${isRed && "infoCard--red"}`}>
            <CardContent>   
            {/* Title */}
            <Typography  color="textSecondary" gutterBottom >
                {title}
            </Typography>
        

            {/*No of cases*/}
            <h2 className={`infoCard__cases ${!isRed && "infoCard__cases--green"}`}>{no_of_cases}</h2>

            
            
            </CardContent>
        </Card>  
    );
}


export default Infocard
