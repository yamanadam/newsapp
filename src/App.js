import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import New from "./components/New";

function App() {
  const [category, setCategory] = useState("science");
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <New category={category} />
    </div>
  );
}

export default App;
