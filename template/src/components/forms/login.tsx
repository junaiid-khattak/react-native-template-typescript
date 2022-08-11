import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PrimaryButton } from 'components';
import { CredentialsType } from 'types';
import { FieldValidationSchema } from 'services';

const schema = yup.object().shape({
  email: FieldValidationSchema?.email,
  password: FieldValidationSchema?.password
}).required();

interface LoginFormProps {
  credentials: CredentialsType;
  onSubmit: (credentials: CredentialsType) => void;
};

const LoginForm = ({ credentials, onSubmit }: LoginFormProps): JSX.Element => {

  const [passwordVisible, setPasswordVisible] = useState(true);

  const {
    handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: credentials?.email,
      password: credentials?.password
    }
  });

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.emailField}>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Enter Email'}
              placeholderTextColor="#A1A1A1"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              scrollEnabled={true}
              returnKeyType="done"
              onBlur={onBlur}
              onChangeText={(inputValue) => onChange(inputValue)}
              value={value}
            />
          </View>
        )}
        name="email"
      />
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={{ color: 'red', paddingHorizontal: 10 }}>
          {errors?.email?.message}
        </Text>
      </View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.passwordField}>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Password'}
              placeholderTextColor="#A1A1A1"
              autoCapitalize="none"
              returnKeyType="done"
              autoCorrect={false}
              scrollEnabled={true}
              secureTextEntry={passwordVisible}
              onBlur={onBlur}
              onChangeText={(inputValue) => onChange(inputValue)}
              value={value}
            />
            {/* <CustomIcon
              name={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
              size={26}
              color="#9600ff"
            /> */}
          </View>
        )}
        name="password"
      />
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={{ color: 'red', paddingHorizontal: 10 }}>
          {errors?.password?.message}
        </Text>
      </View>
      <PrimaryButton title={"Login"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  emailField: {
    marginTop: 20,
    height: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DADADA',
  },
  passwordField: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginLeft: '5%',
    marginRight: '5%',
    paddingLeft: '2%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    fontSize: 12,
    color: '#000',
    textAlign: 'left',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
});


