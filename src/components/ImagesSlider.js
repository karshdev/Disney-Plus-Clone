import React from "react";
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Image(){
  let settings={
    dots:true,
    infinite:true,
    sped:500,
    slidesToShow:1,
    slidesToShow:1,
    autoplay:true
  }
    return (
        <Carousel {...settings}>
         <Wrap>
          <img src="1.jpeg" />
          </Wrap>
          <Wrap>
          <img src="2.jpeg" />
          </Wrap>
          <Wrap>
          <img src="4.jpeg" />
          </Wrap>
          </Carousel>
    )
}
const Carousel=styled(Slider)`
margin-left:30px;
margin:right:30px;
margin-top:5px;
li.slick-active button:before{
  color:white;
}
`
const Wrap=styled.div`
img{
  width:100%;
  height:350px;
  border-radius:5px;
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
}
`