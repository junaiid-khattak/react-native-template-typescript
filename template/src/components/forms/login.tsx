import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
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
  } = useForm<CredentialsType>({
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
          <TextInput
            label="Email"
            placeholder={'Enter Email'}
            onBlur={onBlur}
            onChangeText={(inputValue) => onChange(inputValue)}
            value={value}
            error={errors.email != undefined}
            maxLength={25}
          />
        )}
        name="email"
      />
      <HelperText type="error">{errors?.email?.message}</HelperText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            label="Password"
            secureTextEntry={passwordVisible}
            onBlur={onBlur}
            onChangeText={(inputValue) => onChange(inputValue)}
            value={value}
          />
        )}
        name="password"
      />
      <HelperText type="error">{errors.password?.message}</HelperText>
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


