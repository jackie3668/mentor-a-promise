import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './component/layout/Layout';
import Home from './page/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
