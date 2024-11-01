import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import { router } from "expo-router";

const Finalizado = () => {
  return (
    <SafeAreaView className="pt-20 h-full bg-white">
      <View className="mt-56 ml-20">
        <Image source={images.finalizado} className="w-60 h-44"></Image>
        <View>
          <Text className="text-2xl text-secondary-200 font-bbold mt-6">
            Uhu! Pedido confirmado
          </Text>
          <Text className="text-center mr-20">
            Agora é só aguardar que logo o café chegará até você!
          </Text>
        </View>

        <TouchableOpacity
          className="bg-primary w-56 rounded-lg p-4 mt-4 ml-4"
          onPress={() => {
            router.push("/(tabs)/home");
          }}
        >
          <Text className="text-center text-white font-bbold text-lg">
            IR PARA HOME
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Finalizado;
