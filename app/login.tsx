import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { onGoogleButtonPress } from "@/firebaseAuth";
import { router } from "expo-router";
export default function LoginPage() {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log("Signed in with Google!"))
            .then(() => router.replace("/"))
        }
      >
        <Text> Login with google</Text>
      </TouchableOpacity>
    </View>
  );
}
