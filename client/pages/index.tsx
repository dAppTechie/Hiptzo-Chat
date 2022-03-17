import Head from 'next/head';
import {
  Sidebar,
  InnerSidebar,
  Chat,
  GroupBar,
  FriendBar,
} from '../components';

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <InnerSidebar />
      <Chat />
      <GroupBar />
    </div>
  );
};

export default Home;
