

import './App.css';
import Header from './components/layout/Header';
import {Router} from "./components/router/Router"


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
