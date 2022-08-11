import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from 'react';
import { CredentialsType } from 'types';
import { LoginForm, TextLinkButton, PrimaryText } from 'components';
import { img_bg } from 'assets'

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async ({ email, password }: CredentialsType) => {
    setEmail(email);
    setPassword(password);
  };

  const goToSignup = () => { }

  return (
    <ImageBackground
      source={img_bg}
      style={{ width: '100%', height: '100%' }}>
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
          <PrimaryText title="Login to your SOUL account" />
          <LoginForm
            credentials={{ email, password }}
            onSubmit={login}
          />
          <TextLinkButton
            title="Don't have an account? Register here!"
            onPress={goToSignup} />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  logo: {
    marginTop: 40,
    width: 100,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});