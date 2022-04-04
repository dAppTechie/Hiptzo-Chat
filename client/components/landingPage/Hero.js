import { useMoralis } from 'react-moralis';

import Loader from '../../subComponents/Loader';

const styles = {
  wrapper: 'flex flex-col items-center justify-center md:mt-40 mt-10',
  h1: 'main-text text-3xl md:text-8xl font-bold text-white',
  p: 'secondary-text text-white md:text-2xl md:w-2/5 text-center mt-5 w-10/12 text-xl',
  button:
    'main-text text-[#FF7F50] bg-[#FF7F50] bg-opacity-25 hover:bg-[#FF7F50] border border-[#FF7F50] hover:text-white hover:border-opacity-10 text-4xl font-bold py-2 px-4 rounded-full md:w-2/5 mt-5',
  authenticated: 'hidden',
  authenticating: 'mt-5 text-green-500 text-2xl',
};

const Hero = () => {
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

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Join the revolution</h1>
      <span className={styles.p}>
        Hiptzo Chat is a decentralized web3 chat app in the blockchain that lets
        you send, receive and enjoy chats in an instant and secure way.
      </span>
      {isAuthenticating ? (
        <Loader />
      ) : isAuthenticated ? (
        <button onClick={login} className={styles.authenticated}>
          Connect wallet
        </button>
      ) : (
        <button onClick={login} className={styles.button}>
          Connect wallet
        </button>
      )}
    </div>
  );
};
export default Hero;
