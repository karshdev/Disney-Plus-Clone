import React from "react";
export default function Deatails(){
    return(
        <div className="details">
       <img src="Hinata.jpeg"  className="preview" />
       <div className="information">
       <img src="background-hinata.png"  className="background-hinata"/>

        <div className="buttons">
            <button type="button" className="button1"> <span><img src="btn1.ico" className="btn1" />Play</span></button>
            <button type="button" className="button2"> <span><img src="btn2.jpeg" className="btn2" />Trailer</span></button>
            <button type="button" className="button3">  <img src="btn3.jpeg" className="btn3" /></button>
        </div>
        <div className="title">
            <h2>2018-A soldier is never off duty</h2>
        </div>
        <div className="description">
            <h3>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph.
            </h3>
        </div>
       </div>
        </div>
    )
}