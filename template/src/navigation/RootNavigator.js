import React from 'react';
import UserContext from '../context/user';
import { SplashScreen } from '../screens';
import AuthNavigator from './AuthNavigator';

function RootNavigator() {
  return <UserContext.Consumer>
    {(user) => {
      if (user === undefined) return <SplashScreen />;
      if (user === null) return <AuthNavigator />;
      return (
          {/* <MainNavigator /> */}
      );
    }}
  </UserContext.Consumer>
}

export default RootNavigator;