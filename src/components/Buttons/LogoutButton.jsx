import { useAuth0 } from "@auth0/auth0-react";
import BaseButton from "./BaseButton";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <BaseButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</BaseButton>

};

export default LogoutButton;