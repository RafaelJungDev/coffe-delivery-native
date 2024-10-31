import { View, Text, TextInput } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        className="w-[90vw] h-16 px-4 ml-5 mt-10 text-lg bg-gray-200 rounded-2xl focus:border-secondary items-center border-2 border-black-200 flex-row"
      ></TextInput>
    </View>
  );
};

export default Search;
