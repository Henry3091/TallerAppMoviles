import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

interface CartModalProps {
  cart: any[];
  isModalVisible: boolean;
  toggleModal: () => void;
  getTotal: () => number;
  handleBuy: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ cart, isModalVisible, toggleModal, getTotal, handleBuy }) => {
  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={toggleModal}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Carrito de Compras</Text>
          {cart.length === 0 ? (
            <Text style={{ fontSize: 18 }}>El carrito está vacío.</Text>
          ) : (
            <View>
              {cart.map((item, index) => (
                <View key={index} style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ fontSize: 16 }}>Precio: ${item.price}</Text>
                </View>
              ))}
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Total: ${getTotal()}
              </Text>
            </View>
          )}
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
          <TouchableOpacity
            onPress={toggleModal}
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
  );
};

export default CartModal;

