import { useAuth0 } from "@auth0/auth0-react";
import BaseButton from "./BaseButton";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <BaseButton onClick={() => loginWithRedirect()} key={"button_login"}>Log In with Auth0</BaseButton>;
};

export default LoginButton;