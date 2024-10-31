import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../constants/images";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href={"/(tabs)/home"} />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          backgroundColor: "#4B2995",
        }}
      >
        <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              O melhor sabor{"\n"}
              No melhor lugar{"\n"} sua
              <Text className="text-secondary"> Casa</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 right-0"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-white mt-7 text-center">
            Embarque em uma imensidão de sabores e texturas, com a melhor bebida
            do mundo.
          </Text>

          <CustomButton
            title="Continue com e-mail"
            handlePress={() => router.push("/(auth)/sign-in")}
            containerStyles="w-full mt-7"
          ></CustomButton>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#4B2995" style="light" />
    </SafeAreaView>
  );
}
