import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Proctected from "./Proctected";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
         <Route path="/add" element={<Proctected Cmp={AddProduct}/>}></Route>

         <Route path="/update" element={<Proctected Cmp={UpdateProduct}/>}></Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
