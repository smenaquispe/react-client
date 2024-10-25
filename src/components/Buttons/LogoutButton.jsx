import { useAuth as useCustomAuth } from 'auth-passport-provider';
import { useAuth0 } from '@auth0/auth0-react';
import BaseButton from "./BaseButton";

const LogoutButton = () => {
  const { user: customUser, logout: customLogout, setActivate: setActivateCustom, activate: activateCustom } = useCustomAuth();
  const { logout: auth0Logout } = useAuth0();

  const logout = customUser ? customLogout : auth0Logout; // Llamar al logout adecuado

  const handleClick = () => {
    setActivateCustom(true);
    logout();
  };

  return <BaseButton onClick={handleClick} color='red'>Log Out</BaseButton>

};

export default LogoutButton;