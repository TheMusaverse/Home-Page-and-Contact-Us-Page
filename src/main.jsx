import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

const theme = {
  colorScheme: "light",
  primaryColor: "blue",
  fontFamily: "Arial, sans-serif",
  headings: { fontFamily: "Arial, sans-serif" },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
);
