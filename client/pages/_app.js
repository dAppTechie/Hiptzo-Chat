import '../styles/globals.css';
import { HiptzoChatProvider } from '../context/context';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <HiptzoChatProvider>
      <Component {...pageProps} />
    </HiptzoChatProvider>
  );
}

export default MyApp;
