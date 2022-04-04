import { useMoralis } from 'react-moralis';

const styles = {
  wrapper: 'flex h-20 w-full justify-between sticky top-0 gradient-bg z-10',
  logoContainer: 'flex items-center ml-20',
  h1: 'main-text text-4xl font-bold text-white cursor-pointer',
  ul: 'flex main-text text-white space-x-4',
  li: 'cursor-pointer hover:text-[#FF7F50]',
  linkContainer: 'flex items-center w-fit space-x-4 mr-5 hidden md:flex',
  buttonContainer: 'flex items-center',
  button:
    'main-text text-[#FF7F50] bg-[#FF7F50] bg-opacity-25 hover:bg-[#FF7F50] border border-[#FF7F50] hover:text-white hover:border-opacity-10 text-sm font-bold py-2 px-4 rounded-full',
};

const Navbar = () => {
  const {
    Moralis,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user);
          console.log(user.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const logOut = async () => {
    await logout();
    console.log('logged out');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <a href="#home">
          <h1 className={styles.h1}>Hiptzo Chat</h1>
        </a>
      </div>
      <div className={styles.linkContainer}>
        <ul className={styles.ul}>
          <a href="#chat">
            <li className={styles.li}>Chat</li>
          </a>
          <a href="#NFT">
            <li className={styles.li}>NFT</li>
          </a>
          <a href="#ETH">
            <li className={styles.li}>Send ETH</li>
          </a>
        </ul>
        <div className={styles.buttonContainer}>
          {isAuthenticated ? (
            <button onClick={logOut} className={styles.button}>
              Log Out
            </button>
          ) : (
            <button onClick={login} className={styles.button}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
