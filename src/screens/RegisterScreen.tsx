// /src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { globalStyles } from '../styles/globalStyles';
import { RegisterScreenNavigationProp } from '../navigation/navigationTypes';
import { encryptPassword } from '../utils/encryption';
 // Asegúrate de tener este archivo

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const encryptedPassword = encryptPassword(password);
    console.log({ email, username, encryptedPassword });
    Alert.alert('Registro exitoso', '¡Tu cuenta ha sido registrada!');
  };

  return (
    <View style={globalStyles.container}>
      <Text>Registro</Text>
      <InputField
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Registrar" onPress={handleRegister} />
      <Text
        style={globalStyles.textLink}
        onPress={() => navigation.navigate('Login')}>
        ¿Ya tienes una cuenta? Inicia sesión ahora
      </Text>
    </View>
  );
};

export default RegisterScreen;
