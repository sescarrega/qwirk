import './App.css';
import{BrowserRouter, Route, Routes} from "react-router-dom";
import Home from"./views/Home";
import Create from './views/Create';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
