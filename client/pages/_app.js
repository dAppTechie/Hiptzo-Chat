import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_ID}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_URL}
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp;
