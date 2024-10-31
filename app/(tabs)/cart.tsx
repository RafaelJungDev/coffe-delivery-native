import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ShoppingContext, useShoppingContext } from "@/context/ShoppingContext";

const Cart = () => {
  const { items, setItems } = useContext(ShoppingContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setItems([...items, { name: "Café", price: 5 }]);
        }}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      {items.map((item: any) => (
        <View key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      {items.map((item: any) => (
        <View key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      {items.map((item: any) => (
        <View key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      {items.map((item: any) => (
        <View key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      {items.map((item: any) => (
        <View key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Cart;
