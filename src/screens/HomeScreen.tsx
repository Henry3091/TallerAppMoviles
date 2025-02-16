import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Product {
  id: string;
  name: string;
  price: number;
  image: any; // 'any' para imágenes locales
  quantity: number; // Aseguramos que 'quantity' esté presente
}

const products: Product[] = [
  { id: '1', name: 'Juguete A', price: 10, image: require('../../assets/images/toy-collection-1.jpg'), quantity: 1 },
  { id: '2', name: 'Juguete B', price: 15, image: require('../../assets/images/toy-collection-2.jpg'), quantity: 1 },
  { id: '3', name: 'Juguete C', price: 20, image: require('../../assets/images/toy-collection-3.jpg'), quantity: 1 },
  { id: '4', name: 'Juguete D', price: 12, image: require('../../assets/images/toy-collection-1.jpg'), quantity: 1 },
  { id: '5', name: 'Juguete E', price: 18, image: require('../../assets/images/toy-collection-2.jpg'), quantity: 1 },
  { id: '6', name: 'Juguete F', price: 25, image: require('../../assets/images/toy-collection-3.jpg'), quantity: 1 },
];

const HomeScreen: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartModalVisible, setCartModalVisible] = useState(false);
  const [isProductModalVisible, setProductModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Estado para la cantidad

  const toggleCartModal = () => {
    setCartModalVisible(!isCartModalVisible);
  };

  const toggleProductModal = () => {
    setProductModalVisible(!isProductModalVisible);
  };

  const addToCart = (product: Product, quantity: number) => {
    // Verificar si el producto ya existe en el carrito
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Si el producto ya existe, actualizar la cantidad
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      // Si el producto no existe, agregarlo al carrito
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    // Calcula la cantidad total de productos en el carrito (suma de todas las cantidades)
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleBuy = () => {
    alert('¡Compra realizada con éxito!');
    setCart([]); // Vaciar el carrito después de la compra
    toggleCartModal(); // Cerrar el modal del carrito
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(0); // Restablecer cantidad a 1 al ver el modal
    toggleProductModal();
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 50, overflow: 'hidden' }}>
      <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 20 }}>Lista de productos</Text>

      {/* Ícono del carrito en la parte superior izquierda */}
      <TouchableOpacity onPress={toggleCartModal} style={{ position: 'absolute', top: 40, right: 20 }}>
        <View style={{ position: 'relative' }}>
          <Text style={{ fontSize: 18, color: 'green' }}>{getCartItemCount()}</Text> {/* Muestra la cantidad total de productos */}
          <MaterialCommunityIcons name="cart" size={30} color="green" />
        </View>
      </TouchableOpacity>

      {/* Lista de productos */}
      <ScrollView>
        {products.map(product => (
          <View key={product.id} style={{ margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8 }}>
            <Image source={product.image} style={{ width: 100, height: 100 }} />
            <Text>{product.name}</Text>
            <Text>{`$${product.price}`}</Text>
            {/* Carrito individual para cada producto */}
            <TouchableOpacity
              onPress={() => openProductModal(product)}
              style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <MaterialCommunityIcons name="cart-plus" size={24} color="green" />
              <Text style={{ marginLeft: 5 }}>Ver Detalles</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Modal de detalles del producto */}
      <Modal
        visible={isProductModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleProductModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            {selectedProduct && (
              <>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Detalles del Producto</Text>
                <Image source={selectedProduct.image} style={{ width: 100, height: 100, marginBottom: 10 }} />
                <Text>{selectedProduct.name}</Text>
                <Text>{`$${selectedProduct.price}`}</Text>
                
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity onPress={decrementQuantity} style={{ padding: 10 }}>
                    <Text style={{ fontSize: 20, color: '#2196F3' }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, marginHorizontal: 20 }}>{quantity}</Text>
                  <TouchableOpacity onPress={incrementQuantity} style={{ padding: 10 }}>
                    <Text style={{ fontSize: 20, color: '#2196F3' }}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    addToCart(selectedProduct, quantity);
                    toggleProductModal();
                  }}
                  style={{ backgroundColor: '#2196F3', padding: 10, marginTop: 20, borderRadius: 5, alignItems: 'center' }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>Agregar al carrito</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleProductModal} style={{ marginTop: 10 }}>
                  <Text style={{ color: 'red', fontSize: 18 }}>Cerrar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Modal del carrito */}
      <Modal
        visible={isCartModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCartModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Tu carrito</Text>
            {cart.length === 0 ? (
              <Text>No hay productos en tu carrito.</Text>
            ) : (
              <ScrollView style={{ marginBottom: 20 }}>
                {cart.map(item => (
                  <View key={item.id} style={{ marginBottom: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>Cantidad: {item.quantity}</Text>
                    <Text>Precio: ${item.price}</Text>
                    <Text>Total: ${item.price * item.quantity}</Text>
                  </View>
                ))}
              </ScrollView>
            )}

            <Text style={{ fontSize: 18 }}>Total: ${getTotal()}</Text>

            {cart.length > 0 && (
              <TouchableOpacity
                onPress={handleBuy}
                style={{
                  backgroundColor: '#2196F3',
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 5,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>Comprar</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={toggleCartModal}
              style={{
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'red', fontSize: 18 }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;




