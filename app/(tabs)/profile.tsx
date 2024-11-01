import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { router } from "expo-router";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  return (
    <View className="mt-64">
      <TouchableOpacity
        className="bg-primary w-56 rounded-lg p-4 ml-24"
        onPress={() => {
          signOut();
          setUser(null);
          setIsLoggedIn(false);
          router.replace("/sign-in");
        }}
      >
        <Text className="text-white text-center font-bbold text-lg">Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
