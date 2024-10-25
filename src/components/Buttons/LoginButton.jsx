import { useAuth0 } from "@auth0/auth0-react";
import { useAuth as useCustomAuth } from 'auth-passport-provider';
import BaseButton from "./BaseButton";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { setActivate: setActivateCustom } = useCustomAuth();

  const handleClick = () => {
    setActivateCustom(false);
    loginWithRedirect();
  };

  return <BaseButton onClick={handleClick} key={"button_login"}>Log In with Auth0</BaseButton>;
};

export default LoginButton;