import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Launcher from "./Launcher";


function App() {

  
  return (
    <BrowserRouter>
      <Route path="/" component={Launcher} exact />
    </BrowserRouter>

  );
}

export default App;
