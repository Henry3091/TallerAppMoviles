import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

// Ruta de la imagen de fondo
const backgroundImage = require('../../assets/toy-collection-background.jpg');

const RegisterScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <Button title="Registrarse" onPress={() => {}} />

        {/* Enlace para navegar a la pantalla de Login */}
        <Text style={styles.navigateText} onPress={() => navigation.navigate('Login')}>
          ¿Ya tienes una cuenta? Inicia sesión ahora
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,  // Asegura que la imagen ocupe toda la pantalla
    justifyContent: 'center',  // Centra los elementos verticalmente
    alignItems: 'center',  // Centra los elementos horizontalmente
    width: '100%',
    height: '100%',
  },
  container: {
    width: '80%',  // Ancho del formulario
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Fondo blanco semitransparente para mejorar la legibilidad
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

export default RegisterScreen;
