import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";

const Cards = () => {
  return (
    <TouchableOpacity className="h-fit w-[80vw] bg-neutral-100 -mt-20 px-4 pb-8 justify-center items-center  rounded-lg rounded-tr-[50px] rounded-bl-[50px]">
      <Image
        source={images.latte}
        className="w-40 h-40 absolute -top-16"
      ></Image>
      <Text className="text-lg font-bold mt-28 rounded-full bg-primary-100 text-primary p-1 px-4 font-bbold">
        TRADICIONAL
      </Text>
      <Text className="text-3xl font-bbold mt-4">Latte</Text>
      <Text className="mt-2 text-gray-500 text-lg text-center font-bregular">
        Café expresso com o dobro de leite e espuma cremosa
      </Text>
      <Text className="mb-4 mt-8 text-xl text-secondary-200">
        R$ <Text className="text-3xl text-secondary-200 font-bold">9,90</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default Cards;
