import "./components.css";

const ImagesName = ({title}) => {
  
    return (
      <div className="imagesName">
          <p>{title.charAt(0).toUpperCase() + title.slice(1)} Images</p>
      </div>
    );
  }
  
  export default ImagesName;
  