import "@mantine/core/styles.css";
import "./App.css";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";
import HomePage from "./pages/Home";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
