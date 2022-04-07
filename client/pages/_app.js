import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_URL}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MoralisProvider>
  );
}

export default MyApp;
