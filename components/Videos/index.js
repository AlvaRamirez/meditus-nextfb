import React from 'react'
import Slider from "react-slick";


const Videos = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2
        
      };    
      

    return (
       
        <div id="contvi">
             <div id="videos">

     <h1  className="seccion">Videos</h1>

     <Slider {...settings}>
          <div className="contSlider">
          <iframe src="https://www.youtube.com/embed/x1CrPwhmqX4"  default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/XoYDjtpTBbU"   default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/go8ibd-hGiw"  default></iframe>
          </div>
          {/* <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/Sdi60CAM8Ac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/RHl96GgnusI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/BZqIya_7NQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/CPPSIODRMjc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" default></iframe>
          </div>
          <div  className="contSlider">
          <iframe src="https://www.youtube.com/embed/Y6oKsfSyXIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" default></iframe>
          </div> */}
        
        </Slider>
 
        
     </div>
     </div>
     
    )
}


export default Videos