import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {Surface} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from 'react';
import { CredentialsType } from 'types';
import { LoginForm, TextLinkButton, PrimaryText } from 'components';

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async ({ email, password }: CredentialsType) => {
    setEmail(email);
    setPassword(password);
  };

  const goToSignup = () => { }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <PrimaryText title="Login to your account" />
        <LoginForm
          credentials={{ email, password }}
          onSubmit={login}
        />
        <TextLinkButton
          title="Don't have an account? Register here!"
          onPress={goToSignup} />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '50%',
    marginBottom: '50%'
  },
});