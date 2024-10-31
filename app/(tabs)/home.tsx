import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import FormField from "@/components/FormField";
import Search from "@/components/Search";
import images from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import Cards from "@/components/Cards";
import CoffeCard from "@/components/CoffeCard";

const coffesTrad = [
  {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: images.expressoTradicional,
  },
  {
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: images.expressoAmericano,
  },
  {
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: images.expressoCremoso,
  },
  {
    name: "Latte",
    description: "Café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: images.latte,
  },
  {
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: images.expressoGelado,
  },
];

const coffesDoces = [
  {
    name: "Capuccino",
    description: "Bebida com canela feita de doses de café, leite e espuma",
    price: 9.9,
    image: images.capuccino,
  },
  {
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: images.mocaccino,
  },
  {
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: images.chocolateQuente,
  },
];

const coffesEspeciais = [
  {
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: images.cubano,
  },
  {
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: images.havaiano,
  },
  {
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: images.arabe,
  },
  {
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: images.irlandes,
  },
];

const Home = () => {
  const [filtro, setFiltro] = useState("");
  return (
    <SafeAreaView>
      <ScrollView className="bg-gray-100 h-full">
        <View className="flex-row mt-20 px-8 justify-between">
          <View className="flex-row gap-2 items-center">
            <MapPin color="#4B2995" weight="fill"></MapPin>
            <Text className="text-white">Cuiabá - MT</Text>
          </View>
          <ShoppingCart color="#DBAC2C" weight="fill"></ShoppingCart>
        </View>

        <View>
          <Text className="text-white text-xl px-8 mt-10 font-bold font-bbold">
            Find the perfect Coffe for your break, at any time of the day
          </Text>
          <Search></Search>
          <View className="relative h-40">
            <Image
              source={images.coffe}
              className="right-0 absolute top-0"
            ></Image>
          </View>
        </View>

        <View className="bg-white h-full">
          <View className=" items-center">
            <Cards></Cards>
          </View>

          <View>
            <Text className="text-2xl font-bold mt-4 px-8 text-neutral-600">
              Nossos cafés
            </Text>
            <View className="flex-row">
              <TouchableOpacity
                className={`text-sm font-bold w-fit text-center  mt-4 ml-8 rounded-full font-bbold text-primary p-1 px-4 ${
                  filtro == "TRADICIONAL"
                    ? "bg-neutral-100 border-2 border-primary"
                    : "bg-primary-100 border-2 border-primary-100"
                }`}
                onPress={() => {
                  if (filtro == "TRADICIONAL") {
                    setFiltro("");
                  } else {
                    setFiltro("TRADICIONAL");
                  }
                }}
              >
                <Text className="text-primary font-bold">TRADICIONAL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`text-sm font-bold w-fit text-center  mt-4 ml-2 rounded-full  text-primary p-1 px-4 ${
                  filtro == "DOCES"
                    ? "bg-neutral-100 border-2 border-primary"
                    : "bg-primary-100 border-2 border-primary-100"
                }`}
                onPress={() => {
                  if (filtro == "DOCES") {
                    setFiltro("");
                  } else {
                    setFiltro("DOCES");
                  }
                }}
              >
                <Text className="text-primary font-bold">DOCES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`text-sm font-bold w-fit text-center  mt-4 ml-2 rounded-full  text-primary p-1 px-4 ${
                  filtro == "ESPECIAIS"
                    ? "bg-neutral-100 border-2 border-primary"
                    : "bg-primary-100 border-2 border-primary-100"
                }`}
                onPress={() => {
                  if (filtro == "ESPECIAIS") {
                    setFiltro("");
                  } else {
                    setFiltro("ESPECIAIS");
                  }
                }}
              >
                <Text className="text-primary font-bold">ESPECIAIS</Text>
              </TouchableOpacity>
            </View>
            {(filtro == "TRADICIONAL" || filtro == "") && (
              <>
                <Text className="text-gray-400 font-bold mt-10 ml-8 text-base">
                  Tradicionais
                </Text>
                <View className="gap-10 items-center justify-center mt-2">
                  {coffesTrad.map((coffe) => (
                    <View key={coffe.name}>
                      <CoffeCard
                        name={coffe.name}
                        description={coffe.description}
                        price={coffe.price}
                        image={coffe.image}
                      ></CoffeCard>
                    </View>
                  ))}
                </View>
              </>
            )}

            {(filtro == "DOCES" || filtro == "") && (
              <>
                <Text className="text-gray-400 font-bold mt-10 ml-8 text-base">
                  Doces
                </Text>
                <View className="gap-10 items-center justify-center mt-2">
                  {coffesDoces.map((coffe) => (
                    <View key={coffe.name}>
                      <CoffeCard
                        name={coffe.name}
                        description={coffe.description}
                        price={coffe.price}
                        image={coffe.image}
                      ></CoffeCard>
                    </View>
                  ))}
                </View>
              </>
            )}

            {(filtro == "ESPECIAIS" || filtro == "") && (
              <>
                <Text className="text-gray-400 font-bold mt-10 ml-8 text-base">
                  Especiais
                </Text>
                <View className="gap-10 items-center justify-center mt-2">
                  {coffesEspeciais.map((coffe) => (
                    <View key={coffe.name}>
                      <CoffeCard
                        name={coffe.name}
                        description={coffe.description}
                        price={coffe.price}
                        image={coffe.image}
                      ></CoffeCard>
                    </View>
                  ))}
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" animated></StatusBar>
    </SafeAreaView>
  );
};

export default Home;
