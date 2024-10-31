import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import images from "@/constants/images";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "phosphor-react-native";
import {
  ShoppingContext,
  ShoppingProvider,
  useShoppingContext,
} from "@/context/ShoppingContext";

const Search = () => {
  const { name, description, price } = useLocalSearchParams();

  const [ml, setMl] = useState(114);
  const [quantidade, setQuantidade] = useState(1);

  const { items, setItems } = useContext(ShoppingContext);

  const atualizar = () => {
    console.log(items);
    setItems([...items, { name: "Café", price: 5 }]);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          setItems([...items, { name: "Café", price: 5 }]);
        }}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setItems([...items, { name: "Café", price: 5 }]);
        }}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setItems([...items, { name: "Café", price: 5 }]);
        }}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setItems([...items, { name: "Café", price: 5 }]);
        }}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      <View>
        <View className="h-20 bg-gray-100 w-full flex-row justify-between items-center px-10 pt-6">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <ArrowLeft color="#DBAC2C" weight="fill"></ArrowLeft>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/(tabs)/cart");
            }}
          >
            <ShoppingCart color="#DBAC2C" weight="fill"></ShoppingCart>
          </TouchableOpacity>
        </View>
        <View className="h-[60vh] bg-primary-200 w-full">
          <View className="flex-row justify-between items-center mt-16 px-8">
            <Text className="text-white font-bbold text-xl">{name}</Text>
            <View className="flex-row">
              <Text className="text-secondary-200 font-bregular text-base mt-1 mr-1">
                R$
              </Text>
              <Text className="text-secondary font-bbold text-3xl">
                {price}
              </Text>
            </View>
          </View>
          <Text className="text-white font-bmedium text-lg px-8 mt-10">
            {description}
          </Text>
          <View className="relative h-fit">
            <Image
              source={images.smoke}
              className="w-16 h-36 absolute right-44 top-16 z-10"
            ></Image>
            <Image
              source={images.grandeCafe}
              className="w-80 h-64 absolute top-36 right-14"
            ></Image>
          </View>
        </View>
        <View className="mt-14 px-8">
          <Text className="text-gray-500 text-base">Selecione o tamanho:</Text>
          <View className="flex-row gap-2 justify-center items-center mt-2">
            <TouchableOpacity
              className={` py-3 px-8 rounded-xl text-lg ${
                ml == 114
                  ? " border border-primary-200 bg-white text-primary-200"
                  : "bg-gray-300"
              }`}
              onPress={() => {
                setMl(114);
              }}
            >
              <Text className={`${ml == 114 ? "text-primary-200" : ""}`}>
                114ml
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={` py-3 px-8 rounded-xl text-lg ${
                ml == 140
                  ? " border border-primary-200 bg-white text-primary-200"
                  : "bg-gray-300"
              }`}
              onPress={() => {
                setMl(140);
              }}
            >
              <Text className={`${ml == 140 ? "text-primary-200" : ""}`}>
                140ml
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={` py-3 px-8 rounded-xl text-lg ${
                ml == 227
                  ? " border border-primary-200 bg-white text-primary-200"
                  : "bg-gray-300"
              }`}
              onPress={() => {
                setMl(227);
              }}
            >
              <Text className={`${ml == 227 ? "text-primary-200" : ""}`}>
                227ml
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-20 bg-gray-300 mx-4 rounded-xl mt-4 flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              if (quantidade > 1) {
                setQuantidade(quantidade - 1);
              }
            }}
          >
            <Minus color="#8047f8"></Minus>
          </TouchableOpacity>
          <Text className="text-xl mx-4">{quantidade}</Text>
          <TouchableOpacity
            onPress={() => {
              setQuantidade(quantidade + 1);
            }}
          >
            <Plus color="#8047f8"></Plus>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary rounded-xl px-16 py-4 ml-8"
            onPress={atualizar}
          >
            <Text className="text-white font-bsemibold text-lg">ADICIONAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor="#272221" style="light" />
    </SafeAreaView>
  );
};

export default Search;
