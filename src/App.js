import { useState } from "react";
import Navbar from "./components/Navbar";
import Annonce from "./components/Annonce";

function App() {
  const [menu, setMenu] = useState([
    { id: 1, label: "About Us" },
    { id: 2, label: "My Account" },
    { id: 3, label: "Featured Products" },
    { id: 4, label: "Wishlist" },
  ]);
  return (
    <>
      <Annonce />
      <Navbar menu={menu} />
    </>
  );
}

export default App;
