import React from "react";
import "../App.css";

const EmojiRow = ({title, symbol}) => {
    function copyEmoji() {
        var copyText = symbol;
        navigator.clipboard.writeText(copyText);
    }

return (
  <div className="emojiRow" onClick={copyEmoji}>    
    <span style={{marginRight:"1px"}} className="symbol">{symbol}</span>
    <span className="title">{title}</span>
    <span className="copy">Copy</span>
  </div>
);
}
export default EmojiRow;