import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';

const VALID_CREDENTIALS = {
  email: 'user@mail.com',
  password: '123456',
};

export interface FormData {
  email: string;
  password: string;
}

const App = () => {
  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    if (
      data.email !== VALID_CREDENTIALS.email ||
      data.password !== VALID_CREDENTIALS.password
    ) {
      Alert.alert('Error', 'Invalid credentials.', [{text: 'Close'}]);
      return;
    }

    Alert.alert('Success', 'Credentials accepted.', [{text: 'OK'}]);
  };

  return (
    <StyledContainer>
      <Controller
        control={control}
        name="email"
        render={({field: {value, onChange}}) => (
          <StyledInput label="Email" value={value} onChange={onChange} />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {value, onChange}}) => (
          <StyledInput label="Password" value={value} onChange={onChange} />
        )}
      />
      <StyledButton onPress={handleSubmit(onSubmit)}>Submit</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 24,
    paddingHorizontal: 8,
  },
})`
  background: white;
`;

const StyledInput = styled(Input)`
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export default App;
