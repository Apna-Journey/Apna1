import "./App.css";
import BookStore from "./Component/BookStore";
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import Insert from "./Component/Insert";
import Update from "./Component/Update";
import Nav from "./Component/Nav";
import Readmore from "./Component/Readmore"
function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<BookStore/>}/>
          <Route path='/insert' element={<Insert/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/readmore/:id' element={<Readmore/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


