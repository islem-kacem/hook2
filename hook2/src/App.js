import NavBar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";
import Description from "./Pages/Description";

function App() {


  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/decription/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
