/* Create separate React components for preview and detail view of themes.
Create a React component called Theme.
Inside the Theme component, implement a toggle functionality between preview and detail view for themes.
Iterate over the list of given color themes and create a Theme component for each.
Ensure that toggling between views updates the display accordingly.
Test toggling functionality with different themes to ensure it works as expected. */

import ColorList from "./ColorList";
import ThemePreview from "./ThemePreview";
import { useState } from "react";
import "./Theme.css";
import { IconChevronDown } from "@tabler/icons-react";
import { IconChevronUp } from "@tabler/icons-react";

export default function Theme({ name, colors }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <section className="theme">
      <button className="theme_toggle-details-button" onClick={toggleDetails}>
        <h2 className="theme__title">{name}</h2>
        {showDetails ? (
          <IconChevronUp size="3rem" />
        ) : (
          <IconChevronDown size="3rem" />
        )}
      </button>
      {showDetails ? (
        <ColorList colors={colors} />
      ) : (
        <ThemePreview colors={colors} />
      )}
    </section>
  );
}
