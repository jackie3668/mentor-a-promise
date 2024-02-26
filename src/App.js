import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Layout from './component/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router>
          <Route>
            
          </Route>
        </Router>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
