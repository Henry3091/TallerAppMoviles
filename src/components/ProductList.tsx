import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

// Define las propiedades que este componente recibirá
interface ProductListProps {
  products: { id: string; name: string; price: number; image: any }[];
  addToCart: (product: any) => void;
  openProductModal: (product: any) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart, openProductModal }) => {
  return (
    <View style={globalStyles.listContainer}>
      {products.map((product) => (
        <View key={product.id} style={globalStyles.productItem}>
          <Image source={product.image} style={globalStyles.productImage} />
          <Text>{product.name}</Text>
          <Text>${product.price}</Text>

          {/* Ícono de carrito que abre el modal del producto */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity onPress={() => openProductModal(product)}>
              <MaterialCommunityIcons name="cart" size={24} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductList;












