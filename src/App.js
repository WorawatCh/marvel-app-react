import './Components/style.css';
import {Main} from './Components/Main'
import {Marvel} from './Components/Marvel'
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/:id' element={<Marvel/>}></Route>
    </Routes>
  );
}

export default App;
