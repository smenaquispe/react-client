import { useAuth as useCustomAuth } from 'auth-passport-provider';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Buttons/LogoutButton';

const Dashboard = () => {
  const { user: customUser } = useCustomAuth();
  const { user: auth0User } = useAuth0();

  const user = customUser || auth0User; // Obtener el usuario de cualquiera de los dos providers

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user.name || user.email}</p>
        <LogoutButton />
    </div>
  );
};

export default Dashboard;
