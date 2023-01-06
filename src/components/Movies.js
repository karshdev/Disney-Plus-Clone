import React from "react";
export default function Movies(props){
    return(
        <div className="movie-container">
<div className="movie1">
    <h3>{props.title}</h3>
    <div className="images">
<img src={props.image} className="haikyu" />
<img src={props.image} className="haikyu" />
<img src={props.image} className="haikyu" />
<img src={props.image} className="haikyu" />
<img src={props.image} className="haikyu" />
</div>
</div>
        </div>
    )
}