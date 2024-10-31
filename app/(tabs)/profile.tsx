import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "@/lib/appwrite";

const Profile = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
