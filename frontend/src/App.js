import { ThemeProvider } from "@emotion/react";
import Navbar from "./component/Navbar/Navbar";
import { darkTheme } from "./component/Theme/DarkTheme";
import { CssBaseline } from "@mui/material";
import Home from "./component/Home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <Home />
    </ThemeProvider>
  );
}

export default App;
