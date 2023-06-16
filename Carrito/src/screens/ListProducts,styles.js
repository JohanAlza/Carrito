import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

        container: {
          flex: 1,
          padding: 16,
          backgroundColor: '#fff',
        },
        productContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        },
        productName: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        productPrice: {
          fontSize: 14,
          color: '#888',
        },
        addToCartButton: {
          backgroundColor: 'blue',
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 4,
        },
        addToCartButtonText: {
          color: '#fff',
          fontWeight: 'bold',
        },
        cartTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 16,
          marginBottom: 8,
        },
        cartItemContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 4,
        },
        cartItemName: {
          fontSize: 16,
        },
        removeButton: {
          backgroundColor: 'red',
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 4,
        },
        removeButtonText: {
          color: '#fff',
          fontWeight: 'bold',
        },
        emptyCart: {
          fontSize: 16,
          fontStyle: 'italic',
        },
        totalText: {
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 16,
        },
      

});