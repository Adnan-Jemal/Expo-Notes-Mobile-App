import ThemeSwitch from "@/components/ThemeSwitch";
import { getAuth, signOut } from "@react-native-firebase/auth";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profilePage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <SafeAreaView className="flex-1 p-4 dark:bg-zinc-900 ">
      <View className="flex-row items-center justify-center border-b border-gray-600 pb-4 ">
        <Text className="font-bold text-4xl dark:text-white">Profile</Text>
        <ThemeSwitch />
      </View>
      <ScrollView contentContainerClassName="flex-1 flex-col items-center p-4 pt-6 ">
        <Image
          className="size-32 rounded-full"
          source={{ uri: user?.photoURL || "" }}
        />
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.phoneNumber}</Text>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          signOut(getAuth()).then(() => console.warn("User signed out!"))
        }
      >
        <Text className="font-bold text-2xl dark:text-white">
          Sign out {user?.email}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default profilePage;
