import { useAuth as useCustomAuth } from 'auth-passport-provider';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Buttons/LogoutButton';
import Profile from './Profile';

const Dashboard = () => {
  const { user: customUser, isAuthenticated: isCustomAuth } = useCustomAuth();
  const { user: auth0User, isAuthenticated: isAuth0Authenticated } = useAuth0();

  const user = customUser || auth0User; // Obtener el usuario de cualquiera de los dos providers
  const isAuthenticated = isCustomAuth || isAuth0Authenticated; // Verificar si está autenticado en cualquiera de los dos

  if (!isAuthenticated) {
    return <p>No estás autenticado</p>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">Dashboard</h1>
        <Profile user={user} />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;
