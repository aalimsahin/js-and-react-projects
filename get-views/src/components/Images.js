import "./components.css";
import React, { useContext} from "react";
import { PhotoContext } from "../context/Context";
const Images = () => {
  const { images } = useContext(PhotoContext);
  var imagesList = images.map( image => {

    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return url;
  })
    return (
      <div className=" images-box-bro">
        <div className="images-box">
          {imagesList.map( (image,index) => <img key={index} className="img" src={image} alt="Logo" /> )} 
        </div>
      </div>
    );
  }
  
  export default Images;
  