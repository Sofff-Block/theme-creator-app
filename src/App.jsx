//Tasks
// Set up a React component for displaying a single color card.
// Display hex values and roles on each color card.
// Style color cards to accurately represent the colors.
// Render color cards for each color in the theme.

import "./App.css";
import ColorCard from "./components/ColorCard";
import { themes } from "./db.js";

function App() {
  const theme = themes[0];
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <h2 className="theme-title">{theme.name}</h2>
        <ul className="color-list">
          {theme.colors.map((color) => (
            <li key={color.role}>
              <ColorCard color={color} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
