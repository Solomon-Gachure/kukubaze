import Contact from "./component/contact";
import Drinks from "./component/drinks";
import Hero from "./component/hero";
import Menu from "./component/menu";
import Navbar from "./component/navbar";


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Drinks/>
      <Menu/>
      <Contact/>
    </div>
  );
}

export default App;
