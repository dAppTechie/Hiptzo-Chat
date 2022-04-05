import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import Landing from './landing';
import Chat from './chat';

const Home = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div className="gradient-bg flex min-h-screen flex-col py-2">
      <Head>
        <title>Hiptzo Chat</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/js/jquery-3.6.0.min.js" />
        <script type="text/javascript" src="/js/smoothscroll.min.js" />
      </Head>
      {!isAuthenticated ? <Landing /> : <Chat />}
    </div>
  );
};

export default Home;
