import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { ShoppingContext, useShoppingContext } from "@/context/ShoppingContext";
import { ArrowLeft, Minus, Plus, Trash } from "phosphor-react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import images from "@/constants/images";

const Cart = () => {
  const { items, setItems } = useContext(ShoppingContext);
  return (
    <View className="bg-white">
      <View className="h-20 bg-white w-full flex-row justify-between items-center px-10 pt-6">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <ArrowLeft color="#8047F8" weight="fill"></ArrowLeft>
        </TouchableOpacity>
        <Text className="text-lg mr-32 font-bbold">Carrinho</Text>
      </View>
      <ScrollView className="h-[65vh] w-full bg-white mt-2">
        {items.map((item: any) => (
          <View
            key={item.name}
            className="w-full h-fit border border-gray-200 flex-row pb-4"
          >
            <Image
              source={images.capuccino}
              className="w-20 h-20 mr-8 mt-4 ml-8"
            ></Image>
            <View>
              <View className="flex-row">
                <View className="w-44">
                  <View className="flex-row gap-6">
                    <View>
                      <Text className="text-lg font-bregular mt-4">
                        {item.name}
                      </Text>
                      <Text className="font-bmedium text-base text-gray-500 mb-2">
                        {item.ml}ml
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row items-center gap-4">
                    <View className="flex-row border border-gray-300 w-24 items-center justify-center rounded-xl p-2">
                      <TouchableOpacity
                        onPress={() => {
                          const newItems = items.map((i: any) => {
                            if (i.name === item.name) {
                              return { ...i, quantidade: i.quantidade - 1 };
                            }
                            return i;
                          });
                          setItems(newItems);
                        }}
                      >
                        <Minus color="#8047F8"></Minus>
                      </TouchableOpacity>
                      <Text className="mx-4">{item.quantidade}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          const newItems = items.map((i: any) => {
                            if (i.name === item.name) {
                              return { ...i, quantidade: i.quantidade + 1 };
                            }
                            return i;
                          });
                          setItems(newItems);
                        }}
                      >
                        <Plus color="#8047F8"></Plus>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          setItems(
                            items.filter((i: any) => i.name !== item.name)
                          );
                        }}
                      >
                        <Trash color="#8047F8"></Trash>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View className="w-20">
                  <Text className="text-lg font-bbold mt-4">
                    R$ {item.price}0
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className=" bg-white h-28 px-10 border-t border-gray-300 mt-4">
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-lg font-bbold">Valor Total</Text>
          <Text className="text-lg font-bbold">
            R${" "}
            {items.reduce(
              (acc: number, item: any) => acc + item.price * item.quantidade,
              0
            )}
            0
          </Text>
        </View>

        <TouchableOpacity
          className="w-full bg-secondary-200 p-2 rounded-lg mt-4"
          onPress={() => {
            router.push("/(shop)/finalizado");
          }}
        >
          <Text className="text-lg font-bbold text-white text-center">
            CONFIRMAR PEDIDO
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor="#ffffff" style="dark" />
    </View>
  );
};

export default Cart;
