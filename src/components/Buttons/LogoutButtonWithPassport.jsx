import { useAuth } from "../../providers/AuthProvider";
import BaseButton from "./BaseButton";

export const LogoutButtonWithPassport = () => {

  const { logout } = useAuth();

  return <BaseButton onClick={logout}>Logout</BaseButton>;
};