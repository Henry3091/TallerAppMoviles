import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  // Estilos generales
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textLink: {
    marginTop: 10,
    color: '#007bff',
    textDecorationLine: 'underline',
  },

  // Estilos para el modal de carrito
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '60%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    marginBottom: 10,
  },
  totalText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },

  // Estilos para la lista de productos
  productItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },

  // Estilos adicionales
  // Botón de regresar a la página principal
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 18,
    color: 'blue',
  },

  // Estilos para la opción de carrito (en la parte superior de la pantalla)
  cartButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  cartButtonIcon: {
    fontSize: 24,
    position: 'relative',
  },
  cartButtonText: {
    position: 'absolute',
    top: 0,
    right: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

