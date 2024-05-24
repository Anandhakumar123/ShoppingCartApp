import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Viewcart } from "./components/Viewcart";
import { useState } from "react";
// import { GrandParentComponent } from "./GrandParentComponent";

import { cartContext } from "./components/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      {/* <GrandParentComponent /> */}
      <cartContext.Provider value={{ cart, setCart }}>
        {" "}
        <BrowserRouter>
          <Header cart={cart} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Viewcart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
