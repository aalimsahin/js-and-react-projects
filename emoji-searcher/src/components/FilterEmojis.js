import emojiList from "../emojiList.json";

export default function filterEmoji(text, resultCount) {
        return emojiList.filter(emoji => {
        if(emoji.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
            return true;
        }else if(emoji.keywords.includes(text)) {
            return true;
        }else {
            return false;
        }
    }).slice(0, resultCount);
};


