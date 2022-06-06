import './App.css';
import Intro from './pages/Intro';
import Blank from './pages/Blank';
import Home from './pages/Home';
import Delivery2 from './pages/Delivery2';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Intro />} />
        {/*과제 1, 과제2 */}
        <Route path='/home' element={<Home />} />
        <Route path='/delivery' element={<Delivery2 />} />
        {/*빈 페이지 */}
        <Route path='/blank' element={<Blank />} />
      </Routes>
    </div>
  );
}

export default App;
