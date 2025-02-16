import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { globalStyles } from '../styles/globalStyles';
import { RegisterScreenNavigationProp } from '../navigation/navigationTypes';
import { encryptPassword } from '../utils/encryption';

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  // Usamos un objeto para manejar todos los campos, incluido el celular
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone: '' // Aquí agregamos el campo phone
  });

  // Función para actualizar los valores de cada campo
  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleRegister = () => {
    const encryptedPassword = encryptPassword(formData.password);
    console.log({ ...formData, encryptedPassword });
    Alert.alert('Registro exitoso', '¡Tu cuenta ha sido registrada!');
  };

  return (
    <View style={globalStyles.container}>
      <Text>Registro</Text>
      <InputField
        placeholder="Correo electrónico"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <InputField
        placeholder="Usuario"
        value={formData.username}
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <InputField
        placeholder="Contraseña"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      {/* Campo para el número de celular */}
      <InputField
        placeholder="Número de celular"
        value={formData.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
        keyboardType="phone-pad" // Opcional: Establecer un teclado optimizado para números
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
