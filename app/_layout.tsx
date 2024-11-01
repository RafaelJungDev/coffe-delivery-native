import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GlobalProvider } from "@/context/GlobalProvider";
import { ShoppingProvider } from "@/context/ShoppingContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Baloo2-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
    "Baloo2-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
    "Baloo2-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
    "Baloo2-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <ShoppingProvider>
        <Stack screenOptions={{ contentStyle: { backgroundColor: "#FFFFFF" } }}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "#FFFFFF" },
            }}
          />
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "#FFFFFF" },
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "#FFFFFF" },
            }}
          />
          <Stack.Screen
            name="(shop)"
            options={{
              headerShown: false,
              contentStyle: { backgroundColor: "#FFFFFF" },
            }}
          />
        </Stack>
      </ShoppingProvider>
    </GlobalProvider>
  );
}
