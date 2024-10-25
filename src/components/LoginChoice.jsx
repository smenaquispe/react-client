import LoginButton from './Buttons/LoginButton';
import LoginButtonWithPassport from './Buttons/LoginButtonWithPassport';

const LoginChoice = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Elige un método de autenticación
        </h1>
        <div className="flex flex-col space-y-4">
          <LoginButton />
          <LoginButtonWithPassport />
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;
