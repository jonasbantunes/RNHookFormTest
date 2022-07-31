import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export interface InputProps {
  label: string;
  value?: string;
  onChange?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
}

const Input = ({label, value, onChange, style}: InputProps) => {
  return (
    <StyledContainer style={style}>
      <StyledLabel>{label}</StyledLabel>

      <StyledInputContainer>
        <StyledInput value={value} onChangeText={onChange} />
      </StyledInputContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View``;

const StyledLabel = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #152536;
`;

const StyledInputContainer = styled.View`
  margin-top: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const StyledInput = styled.TextInput`
  padding: 8px 16px;
  flex: 1;
`;

export default Input;
