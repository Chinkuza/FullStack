import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer1 from "./Components/Footer/Footer1";
import routes from "./Components/routes";
import { useRoutes } from "hookrouter";
import "./App.css";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <Navbar />
      {routeResult}
      <Footer1 />
    </div>
  );
}

export default App;
