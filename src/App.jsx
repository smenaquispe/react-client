import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginChoice from './components/LoginChoice';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginChoice />} />
        <Route
          path="/dashboard"
          element={ <Dashboard /> }
        />
      </Routes>
    </Router>
  );
};

export default App;
