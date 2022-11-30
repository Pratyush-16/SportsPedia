import React, { useState } from "react";
import "./styles.css";

//emojis database
var emojiDictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": " Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑": " Field Hockey",
  "🏒": "Ice Hockey",
  "🏓": "Ping Pong",
  "🏸": " Badminton"
};

//made array of emojis
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  //take  emojis in input box
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we do have not this meaning in our database";
    }
    setMeaning(meaning);
  }

  //takes meaning when you directly click on the emoji
  function emojiClickHandler(emoji) {
    //console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Sports Emojipedia</h1>

      <input onChange={emojiInputHandler}></input>

      <h2>{meaning}</h2>

      <h3>Emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
