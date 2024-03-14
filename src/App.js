import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './component/layout/Layout';
import Home from './page/home/Home';
import GetInvolved from './page/get-involved/GetInvolved';
import About from './page/about/About';
import Programs from './page/programs/Programs';
import Contact from './page/contact/Contact';
import PromisePath from './page/promise-path/PromisePath';
import PrivacyPolicy from './page/privacy-policy/PrivacyPolicy';
import Disclaimer from './page/disclaimer/Disclaimer';

function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/get-involved' element={<GetInvolved />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/promise-path' element={<PromisePath />} />
            <Route path='/privary-policy' element={<PrivacyPolicy />} />
            <Route path='/disclaimer' element={<Disclaimer />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
