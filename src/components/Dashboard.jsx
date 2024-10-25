import { useAuth as useCustomAuth } from 'auth-passport-provider';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Buttons/LogoutButton';

const Dashboard = () => {
  const { user: customUser, isAuthenticated: isCustomAuth } = useCustomAuth();
  const { user: auth0User, isAuthenticated: isAuth0Authenticated } = useAuth0();

  const user = customUser || auth0User; // Obtener el usuario de cualquiera de los dos providers
  const isAuthenticated = isCustomAuth || isAuth0Authenticated; // Verificar si está autenticado en cualquiera de los dos

  if (!isAuthenticated) {
    return <p>No estás autenticado</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user?.name || user?.email}</p>
        <LogoutButton />
    </div>
  );
};

export default Dashboard;
