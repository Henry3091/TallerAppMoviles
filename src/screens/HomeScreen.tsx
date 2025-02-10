// /src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

// Añadir la URL o ruta de las imágenes en los productos
const products = [
  { id: '1', name: 'Juguete A', price: '10 USD', image: require('../../assets/images/toy-collection-1.jpg') },
  { id: '2', name: 'Juguete B', price: '15 USD', image: require('../../assets/images/toy-collection-2.jpg') },
  { id: '3', name: 'Juguete C', price: '20 USD', image: require('../../assets/images/toy-collection-3.jpg') },
];

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Lista de productos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            {/* Mostrar la imagen del producto */}
            <Image
              source={item.image}
              style={{ width: 100, height: 100, borderRadius: 8, marginBottom: 10 }}
            />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
