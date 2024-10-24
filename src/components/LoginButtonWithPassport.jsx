import { useAuth } from "../providers/AuthProvider";

export const LoginButtonWithPassport = () => {

  const { login } = useAuth();

    return (
      <div>
        <button onClick={login}>
          Login with Passport
        </button>
    </div>
  );
};