import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from '../styles/globalStyles';

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;  
  placeholder: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  placeholder
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputField;