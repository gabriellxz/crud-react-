import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Router from "./Router";
import './style.css'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="app">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
