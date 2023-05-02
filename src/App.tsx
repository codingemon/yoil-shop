import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Chei from "./component/pages/Chei";
import JJuNi from "./component/pages/JJuNi";
import Gu from "./component/pages/Gu";
import Jenny from "./component/pages/Jenny";
import NavMenu from "./component/NavMenu";
import Ro from "./component/pages/Ro";
import Home from "./component/pages/Home";
import TabBar from "./component/TabBar";
import Menu from "./component/tabpages/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavMenu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chei" element={<Chei />} />
          <Route path="/jjuni" element={<JJuNi />} />
          <Route path="/jenny" element={<Jenny />} />
          <Route path="/ro" element={<Ro />} />
          <Route path="/gu" element={<Gu />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <TabBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
