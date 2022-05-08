import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function createEntry(item) {
  return (
    <Entry
      key={item.id}
      name={item.name}
      emoji={item.emoji}
      meaning={item.meaning}
  
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
