import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import SignUpContextProvider from './src/contexts/SignUpContext';

import MainStack from './src/stacks/MainStack';

export default () => {
  return(
    <SignUpContextProvider>
      
      <UserContextProvider>

        <NavigationContainer>
          <MainStack />
        </NavigationContainer>

      </UserContextProvider>

    </SignUpContextProvider>

  );
};