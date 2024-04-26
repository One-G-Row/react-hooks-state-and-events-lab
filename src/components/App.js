import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false);
  const [appDark, setAppDark] = useState(false);

  function handleClick() {
    setIsDark(!isDark);
    setAppDark(!appDark)
  }

  const appClass = false ? "App dark" : "App light";


  return (
    <div className={appDark ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
