import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import { router } from "expo-router";

interface CoffeCardProps {
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

const CoffeCard = ({ name, description, price, image }: CoffeCardProps) => {
  return (
    <TouchableOpacity
      className="w-96 h-36 bg-neutral-100  rounded-tr-[50px] rounded-bl-[50px] flex-row"
      onPress={() => {
        router.push({
          pathname: "/(shop)/coffe",
          params: { name, description, price },
        });
      }}
    >
      <View>
        <Image
          source={image}
          className="w-32 h-32 absolute -top-6 left-4"
        ></Image>
      </View>

      <View className="ml-40 pr-4 pt-4">
        <Text className="text-lg font-bbold">{name}</Text>
        <Text className="text-gray-500 text-sm font-bregular">
          {description}
        </Text>
        <Text className="text-base text-secondary-200 mt-3 font-bregular">
          R${" "}
          <Text className="font-bold text-secondary-200 text-xl">{price}0</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeCard;
