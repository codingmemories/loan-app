import { useState } from "react";

import { Home } from "./components";
import CURRENT_LOANS from "./store/current-loans.json";

import "./App.css";

function App() {
  const [loans, setLoans] = useState(CURRENT_LOANS);

  return (
    <>
      <Home loans={loans} />
    </>
  );
}

export default App;
