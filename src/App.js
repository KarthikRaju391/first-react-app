import { useState } from "react";
import "./styles.css";

//Emoji database
const emojiDictionary = {
  "😂": "laughing",
  "🔥": "lit",
  "🍔": "burger",
  "🚗": "car",
  "😶": "speechless",
  "😀": "happy",
  "🙄": "rolling eyes",
  "🤐": "mouth zipped",
  "🤯": "mind blown",
  "🥱": "yawning",
  "🤧": "sneezing",
  "🤓": "nerd",
  "🤨": "suspicious",
  "😫": "tired",
  "🤑": "money mouth",
  "👽": "alien",
  "🥶": "freezing"
};

export default function App() {
  let emojisWeKnow = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState(""); //meaning is set to empty

  function emojiInputHandler(event) {
    let userInput = event.target.value; //taking the userInput

    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have that emoji in our database";
    }

    setMeaning(meaning); //setting the meaning to the updated value
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside OUT</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter your emoji here to know it's meaning"
      />
      <div className="outputDisplay">{meaning}</div>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "xx-large",
              cursor: "pointer",
              padding: "0.5rem"
            }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
