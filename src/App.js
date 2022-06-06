import './App.css';
import Intro from './pages/Intro';
import Blank from './pages/Blank';
import Home from './pages/Home';
import Delivery2 from './pages/Delivery2';
import DeliveryAfter from './pages/DeliveryAfter';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Intro />} />
        {/*과제 1, 과제2 */}
        <Route path='/home' element={<Home />} />
        <Route path='/delivery' element={<Delivery2 />} />
        <Route path='/deliveryAfter' element={<DeliveryAfter />} />
        {/*빈 페이지 */}
        <Route path='/blank' element={<Blank />} />
      </Routes>
    </div>
  );
}

export default App;
