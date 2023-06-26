import Home from "./pages/Home";
import Navbar from "../src/components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import About from "./pages/About";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
