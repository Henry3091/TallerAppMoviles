// /src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;