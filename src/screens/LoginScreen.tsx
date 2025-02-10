import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import CryptoJS from 'crypto-js';  

const backgroundImage = require('../../assets/toy-collection-background.jpg');

const LoginScreen = ({ navigation }: any) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

    const encriptarContraseña = (contraseña: string) => {
    return CryptoJS.AES.encrypt(contraseña, 'clave-secreta').toString();
  };

    const handleLogin = () => {
    const contraseñaEncriptada = encriptarContraseña(contraseña);
    console.log("Inicio de sesión:", usuario, contraseñaEncriptada);  
    navigation.navigate('Home');  
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={contraseña}
          onChangeText={setContraseña}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />

        <Text style={styles.navigateText} onPress={() => navigation.navigate('Register')}>
          ¿No tienes una cuenta? Regístrate ahora.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 8,
  },
  navigateText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
