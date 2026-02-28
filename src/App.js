
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Calculator from './pages/Calculator';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Calculator' element={<Calculator />} />
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
