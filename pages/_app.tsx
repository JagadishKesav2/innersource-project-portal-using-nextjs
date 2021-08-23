import type { AppProps } from 'next/app';
import Store, { Context } from '../store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { state, dispatch } = useContext(Context);
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  )
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async ctx => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx)
//
//   return { ...appProps }
// }

export default MyApp;
