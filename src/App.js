import Contact from "./component/contact";
import Drinks from "./component/drinks";
import Hero from "./component/hero";
import Map from "./component/map";
import Menu from "./component/menu";
import Cartcontext from "./component/cartcontext";
function App() {
  return (
    <div>
      <Cartcontext>
        <Hero />
        <Drinks />
        <Menu />
        <Map />
        <Contact />
      </Cartcontext>
    </div>
  );
}

export default App;
