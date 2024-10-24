import { useAuth } from "../providers/AuthProvider";

export const LogoutButtonWithPassport = () => {

  const { logout } = useAuth();

    return (
      <div>
        <button onClick={logout}>
          Logout with Passport
        </button>
    </div>
  );
};