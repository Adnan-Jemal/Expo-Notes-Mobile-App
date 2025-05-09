import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { onGoogleButtonPress } from "@/firebaseAuth";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function LoginPage() {
  return (
    <SafeAreaView className=" flex-1   bg-black items-center">
      <View className="h-1/2 w-full border mb-4 items-center justify-center">
        <MaterialIcons
          name="notes"
          size={78}
          color={"white"}
          className="border border-zinc-800 p-4 rounded-full"
        />
      </View>
      <View className="p-6 h-1/2 bg-zinc-900 w-full  rounded-t-3xl items-center">
        <Text className="text-white font-bold text-4xl my-2 mt-8">
          Welcome to Notes
        </Text>
        <Text className=" text-white text-lg">Login or Signup</Text>
        <View className="w-full bg-white h-0.5 mt-10"></View>
        <View className="my-auto gap-8 ">
          <TouchableOpacity
            className="bg-white  px-6 py-4 rounded-xl "
            onPress={() =>
              onGoogleButtonPress()
                .then(() => console.log("Signed in with Google!"))
                .then(() => router.replace("/"))
            }
          >
            <Text className=" font-bold text-2xl"> Sign In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white  px-6 py-4 rounded-xl "
            onPress={() =>
              Alert.alert(
                "Oops!",
                "We are having trouble signing you in with Apple right now. You can try again later or use another sign-in method.",
                [{ text: "Got it" }]
              )
            }
          >
            <Text className=" font-bold text-2xl"> Sign In with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
