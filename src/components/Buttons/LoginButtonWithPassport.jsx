import { useAuth } from "auth-passport-provider";
import BaseButton from "./BaseButton";

const LoginButtonWithPassport = () => {

  const { login, setActivate } = useAuth();

  const handleClick = () => {
    setActivate(true);
    login();
  };

    return <BaseButton onClick={handleClick} color="green" key={"button_login_with_passport"}>Login with Passport</BaseButton>;
};

export default LoginButtonWithPassport;