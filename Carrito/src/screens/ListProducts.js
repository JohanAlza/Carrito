import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './ListProducts,styles';


//useState

const ListProducts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);


//Lista de productos

  const products = [
    { id: 1, name: "Pizza", price: "$1.5" },
    { id: 2, name: "Tabaco", price: "$0.25" },
    { id: 3, name: "Cerveza", price: "$2.10" },
    { id: 4, name: "Lasaña", price: "$5" },
    { id: 5, name: "Lechuga", price: "$0.10" },
  ];

  //Añadir al carro

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }

    setTotal((prevTotal) => prevTotal + parseFloat(item.price.replace('$', '')));
  };


  //Eliminar producto

  const removeFromCart = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedItems.filter((cartItem) => cartItem.quantity > 0));

    setTotal((prevTotal) =>
      prevTotal >= parseFloat(item.price.replace('$', '')) && item.quantity > 0
        ? prevTotal - parseFloat(item.price.replace('$', ''))
        : prevTotal
    );
  };


  //Mostar productos

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );

  
  //Mostar en el carrito productos

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Text style={styles.cartItemName}>
        {item.name} - Cantidad: {item.quantity}
      </Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromCart(item)}
      >
        <Text style={styles.removeButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  //Texto
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.cartTitle}>Carrito de compras</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>El carrito está vacío</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {cartItems.length > 0 && (
        <Text style={styles.totalText}>Total a pagar: ${total.toFixed(2)}</Text>
      )}
    </View>
  );
};

export { ListProducts };
