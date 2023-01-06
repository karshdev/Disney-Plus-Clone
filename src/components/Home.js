import React,{ useEffect} from "react";
import Image from './ImagesSlider' 
import Viewers from './Viewers'
import Movies from './Movies'
import data from "./data";
export default function Home(){
const movieselements=data.map(kaam =>{
    return <Movies 
    title={kaam.title}
    image={kaam.img}
    />
})

    return(
        <div className="Home">
            <Image />
            <Viewers />
            {movieselements}
       
        </div>
    )
}