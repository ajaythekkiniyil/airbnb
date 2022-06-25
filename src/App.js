import NavBar from './components/NavBar'
import '../src/style.css'
import Hero from './components/Hero';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
