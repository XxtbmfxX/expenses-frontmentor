import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Head from "./Components/Head";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Total from "./Components/Total";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Head />
      <Main />
      <Total />
      <Footer />
    </div>
  );
}

export default App;
