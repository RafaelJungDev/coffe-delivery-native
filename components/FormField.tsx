import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import icons from "@/constants/icons";

interface FormFieldProps {
  title: string;
  value?: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-white text-base font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center border-2 border-black-200 flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title == "Password" && !showPassword}
        ></TextInput>

        {title == "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
