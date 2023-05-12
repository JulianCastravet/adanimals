import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// 
import PublicRoutes from './pages/PublicRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<PublicRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
