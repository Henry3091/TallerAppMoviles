import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

type InputFieldProps = TextInputProps & {
  secureTextEntry?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ secureTextEntry, ...props }) => {
  return (
    <TextInput
      {...props}
      secureTextEntry={secureTextEntry}
      style={globalStyles.input}
    />
  );
};

export default InputField;
