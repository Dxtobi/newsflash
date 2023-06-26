
import { FaGoogle,  FaMicrosoft } from 'react-icons/fa';

const LoginPage = () => {
  const handleLogin = (provider) => {
    // Implement login logic for the selected provider
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50svh]  w-full px-3">
      <h2 className="text-3xl font-bold mb-6 flex-col">Login</h2>
      <div className="flex items-center space-x-4 flex-col gap-4 w-full">
        <button
          onClick={() => handleLogin('Google')}
          className=" min-w-[50%] flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </button>
       
        <button
          onClick={() => handleLogin('Microsoft')}
          className="flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none min-w-[50%] "
        >
          <FaMicrosoft className="mr-2" />
          Login with Microsoft
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
