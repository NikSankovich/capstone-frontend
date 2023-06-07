import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Router from './Router';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
