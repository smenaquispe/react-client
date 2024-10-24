import { useAuth } from "auth-passport-provider";
import BaseButton from "./BaseButton";

const LoginButtonWithPassport = () => {

  const { login } = useAuth();

    return <BaseButton onClick={login} color="red" key={"button_login_with_passport"}>Login with Passport</BaseButton>;
};

export default LoginButtonWithPassport;