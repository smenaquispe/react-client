import LoginButton from './Buttons/LoginButton';
import LoginButtonWithPassport from './Buttons/LoginButtonWithPassport';

const LoginChoice = () => {
  return (
    <div>
      <h1>Elige un método de autenticación</h1>
        <LoginButton />
        <LoginButtonWithPassport />
    </div>
  );
};

export default LoginChoice;
