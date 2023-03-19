import Navbar from "./components/Navbar"
import Home from "./view/Home";
import Pokemons from "./view/Pokemons"
import wallpaper from "./assets/img/wallpaper.jpg"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";


function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${wallpaper})`
    }}>


      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pokemons/:capture" element={<Pokemons />} />
          </Routes>
        </Container>
      </BrowserRouter>
 
      
    </div>
  );
}

export default App;
