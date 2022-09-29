
import './App.css';
import Footer from './component/footer';
import Navbar from './component/Navbar';
import AllRoutes from './pages/Allroutes';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
