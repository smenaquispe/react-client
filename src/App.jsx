import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth as useCustomAuth } from 'auth-passport-provider';
import { useAuth0 } from '@auth0/auth0-react';
import LoginChoice from './components/LoginChoice';
import Dashboard from './components/Dashboard';

const App = () => {
  const { isAuthenticated: isCustomAuth } = useCustomAuth();
  const { isAuthenticated: isAuth0Authenticated } = useAuth0();

  const isAuthenticated = isCustomAuth || isAuth0Authenticated; // Verificar si está autenticado en cualquiera de los dos

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginChoice />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
