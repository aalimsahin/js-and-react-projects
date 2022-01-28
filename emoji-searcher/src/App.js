import './App.css';
import Header from "./components/Header";
import EmojiList from "./components/EmojiList";
import React, {useState} from 'react';
import filterEmoji from './components/FilterEmojis';

function App() {
  const [searchData, setSearchData] = useState(filterEmoji("",40));

  const handleSearchChange = (data) => {
    setSearchData(filterEmoji(data.target.value, 40))
  };

  return (
    <div >
      <div style={{display: "flex", flexDirection: "row"}}>
        <EmojiList searchData={searchData}/>
        <Header textChange={handleSearchChange}/>
      </div>
    </div>
  );
}

export default App;
