import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
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
  const [result, setResult] = useState<'Success' | 'Invalid' | null>(null);
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
      setResult('Invalid');
      return;
    }

    setResult('Success');
  };

  return (
    <StyledContainer>
      <Controller
        control={control}
        name="email"
        render={({field: {value, onChange}}) => (
          <StyledInput
            accessibilityLabel="Email"
            label="Email"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {value, onChange}}) => (
          <StyledInput
            accessibilityLabel="Password"
            label="Password"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <StyledButton onPress={handleSubmit(onSubmit)}>Submit</StyledButton>
      {result != null ? <StyledResult>{result}</StyledResult> : null}
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

const StyledResult = styled.Text`
  margin-top: 32px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  color: #152536;
`;

export default App;
