import "./App.css";
import CompanyStore from "./Component/CompanyStore";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Insert from "./Component/Insert";
import Update from "./Component/Update";
import Nav from "./Component/Nav";
import Readmore from "./Component/Readmore";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Register from "./Component/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Component/Footer";
import "./index.js";
import About from "./Component/about";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<CompanyStore />} />
            <Route path="/home" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/insert' element={<Insert />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/readmore/:id' element={<Readmore />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </div>
  );
}

export default App;
