import { useMoralis } from 'react-moralis';

const RightMain = () => {
  const { isAuthenticated, user, logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log('logged out');
  };

  return (
    <div className="w-96 border-l border-stone-500 p-5">
      {isAuthenticated ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};
export default RightMain;
