import React from "react";

export default function Header(){
    
    return(
     <nav className="container">    
            <img src="disney.jpeg" className="logo" />
        <div className="attribute">
            <div className="home">
                <img src="home-5-16.ico" /> &nbsp; 
                <a href="#">Home</a>
            </div>
            <div className="search">
                <img src="search-16.ico" /> &nbsp; 
                <a href="#">Search</a>
            </div>
            <div className="watchlist">
                <img src="add-list-16.ico"/> &nbsp; 
                <a href="#">Watchlist</a>
            </div>
            <div className="originals">
                <img src="video-5-16.ico" /> &nbsp; 
                <a href="#">Originals</a>
            </div>
            <div className="movies">
                <img src="video-hd-2-16.ico" /> &nbsp; 
                 <a href="#">Movies</a>
            </div>
            <div className="series">
                <img src="video-play-16.ico" /> &nbsp; 
                <a href="#">Series</a>
            </div>
        </div>
        <div className="login" >
<img src="Aakarsh.jpeg" className="login" />
        </div>
       
     </nav>
    )
}