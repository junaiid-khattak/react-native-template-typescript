import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserContext from './src/context/user';
import { RootNavigator } from './src/navigation';
import { UserType } from './src/types';

const App = () => {

  const [user, setUser] = useState<UserType | null>();

  useEffect(() => {
    splashTimer();
  }, [])

  const bootstrap = () => {
    setUser(null);
  }

  const splashTimer = () => setTimeout(bootstrap, 500);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
    </UserContext.Provider>

  );
};

export default App;
