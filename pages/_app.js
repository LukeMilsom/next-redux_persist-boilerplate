import React from 'react';
import { wrapper } from '../redux/store';
import '../styles/globals.css';
import PersistWrapper from 'next-persist/lib/NextPersistWrapper';

const MyApp = ({ Component, pageProps }) => {
  const npConfig = {
    method: 'localStorage',
    allowList: {
      boilerActions: [],
    },
  };

  return (
    <PersistWrapper wrapperConfig={npConfig}>
      <Component {...pageProps} />
    </PersistWrapper>
  );
};

export default wrapper.withRedux(MyApp);
