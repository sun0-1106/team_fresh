import './App.css';
import Intro from './pages/Intro';
import Introduce from './pages/Introduce';
import Service from './pages/Service';
import Recruit from './pages/Recruit';
import Customer from './pages/Customer';
import Home from './pages/Home';
import Delivery from './pages/Delivery';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Intro />} />
        {/*과제 1, 과제2 */}
        <Route path='/home' element={<Home />} />
        <Route path='/delivery' element={<Delivery />} />
        {/*빈 페이지 */}
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/service' element={<Service />} />
        <Route path='/recruit' element={<Recruit />} />
        <Route path='/customer' element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
