import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = ({children, onPress, style}: ButtonProps) => {
  return (
    <StyledTouchable onPress={onPress} style={style}>
      <StyledLabel>{children}</StyledLabel>
    </StyledTouchable>
  );
};

const StyledTouchable = styled.TouchableOpacity`
  padding: 10px 16px;
  border-radius: 4px;
  background: #7749f8;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
`;

export default Button;
