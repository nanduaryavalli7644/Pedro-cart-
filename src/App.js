import './App.css';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import {BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
     <BrowserRouter> 
       <Header/>
       <div>
         
       </div>
       <Route path="/" component={Shop} exact></Route>
       <Route path="/cart" component={Cart} exact></Route>
       
 </BrowserRouter>
  
    </div>
  );
}

export default App;
