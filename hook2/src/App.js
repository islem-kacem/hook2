import NavBar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";
import Description from "./Pages/Description";
import Register from "./Pages/Register";
import Login from "./Pages/Home";



function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element ={<Register/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/decription/:id" element={<Description />} />
      </Routes>
    </div>
    
  );
}

export default App;
