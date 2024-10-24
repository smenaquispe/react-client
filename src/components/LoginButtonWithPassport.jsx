import { useAuth } from "../providers/AuthProvider";

const API_URL = 'http://localhost:6001';



export const LoginButtonWithPassport = () => {

  const { login, isAuthenticated, logout } = useAuth();

    return (
      <div>
      {!isAuthenticated ? (
        <button onClick={login}>
          Login
        </button>
      ) : (
        <>
          <p>You are already logged in!</p>
          <button onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};