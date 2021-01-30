/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {assignTokenHeader, initializeAxios} from './src/config/axios-config';

import {MainStack} from './src/navigation';

const App = () => {
  // Use this to initialize everything regarding app services
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // This runs only once on app open
    initializeAxios();
    if (!token) {
      // Auth user by your provider
    }
  }, []);

  useEffect(() => {
    // This runs on token change
    if (token) {
      assignTokenHeader(token);
    }
  }, [token]);

  return <MainStack />;
};

export default App;
