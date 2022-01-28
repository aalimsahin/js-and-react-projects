import React, { useContext, useState} from "react";
import Images from "./Images"
import ImagesName from "./ImagesName"
import Loading from "./Loading"
import "./components.css";
import { PhotoContext } from "../context/Context";

const Search = () => {
  const {  title, setTitle, loading,runSearch } = useContext(PhotoContext);
  const [searchData, setSearchData] = useState("")
    const getInfo = async (data) => {
      await runSearch(data)
      setTitle(data)
    }
    
    const updateSearchData = (e) => {
      setSearchData(e.target.value)
    }
    return (
      <div>
           <div>
                <div className="search-box">
                    <input id="input" className="search-txt" type="text" name="" placeholder="Type to search" onChange={updateSearchData} value={searchData}></input>
                    <a onClick={ (e) => {
                      e.preventDefault()
                      getInfo(searchData)
                      setSearchData("")
                    }} className="search-btn" href="/">🔎</a>
                </div>
          </div>
          <div className="button-box">
              <button onClick={ data => getInfo("mountain")} className="button-btn">Mountain</button>
              <button onClick={ data => getInfo("car")} className="button-btn">Car</button>
              <button onClick={ data => getInfo("rocket")} className="button-btn">Rocket</button>
              <button onClick={ data => getInfo("blockchain")} className="button-btn">Blockchain</button>
          </div>
          {loading ? <Loading/> : (
            <div>
            
        <ImagesName title={title}/>
        <Images />
            </div>
        )}
      </div>
    );
}
  
export default Search;
  