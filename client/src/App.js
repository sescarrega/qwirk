import './App.css';
import{BrowserRouter, Route, Routes} from "react-router-dom";
import Home from"./views/Home";
import Create from './views/Create';
import Edit from'./views/Edit';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path=':id/edit' element={<Edit/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
