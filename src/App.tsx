import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './AllRoutes/Navebar';

import "./AllRoutes/all css/styles.css";
import "./AllRoutes/all css/swiper-bundle.min.css";
import Protfolio from './AllRoutes/1Protfolio';

function App() {
console.log("rerandering............... "); 
            
  return ( 
    <BrowserRouter>
      <main>
        <Routes>
          
          <Route path='/' element={<Protfolio />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
 
export default App
