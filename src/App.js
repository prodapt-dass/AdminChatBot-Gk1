import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ConfigPage from "./Components/ConfigPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/config" element={<ConfigPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
