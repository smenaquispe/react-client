import { useAuth as useCustomAuth } from 'auth-passport-provider';
import { useAuth0 } from '@auth0/auth0-react';
import BaseButton from "./BaseButton";

const LogoutButton = () => {
  const { user: customUser, logout: customLogout } = useCustomAuth();
  const { logout: auth0Logout } = useAuth0();

  const logout = customUser ? customLogout : auth0Logout; // Llamar al logout adecuado

  return <BaseButton onClick={logout} color='green'>Log Out</BaseButton>

};

export default LogoutButton;