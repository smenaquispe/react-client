import { useAuth } from "auth-passport-provider";
import BaseButton from "./BaseButton";

export const LogoutButtonWithPassport = () => {

  const { logout } = useAuth();

  return <BaseButton onClick={logout}>Logout</BaseButton>;
};