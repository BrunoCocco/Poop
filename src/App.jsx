import { useState } from "react";
import BottomThumbNav from "./components/NavBar";

function App() {
  const [active, setActive] = useState("home");
  return <BottomThumbNav active={active} onChange={setActive} />;
}

export default App;