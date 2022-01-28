import React from 'react';
import EmojiRow from "./EmojiRow";

const EmojiList = ({searchData}) => {
    return(
        <div className='emojiList'>
            <div style={{display:"block", color:"white"}}>
                {searchData.map((emojiData, index) => (
                <EmojiRow key={index} title={emojiData.title} symbol={emojiData.symbol}/>
                ))}
            </div>
        </div>
    )

}

export default EmojiList;