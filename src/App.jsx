//Tasks
// Set up a React component for displaying a single color card.
// Display hex values and roles on each color card.
// Style color cards to accurately represent the colors.
// Render color cards for each color in the theme.

import "./App.css";
import Theme from "./components/Theme.jsx";
import { themes } from "./db.js";

function App() {
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <div className="preview-container">
        <main className="main-container">
          <ul className="theme-list">
            {themes.map((theme) => (
              <li key={theme.id}>
                <Theme name={theme.name} colors={theme.colors} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
