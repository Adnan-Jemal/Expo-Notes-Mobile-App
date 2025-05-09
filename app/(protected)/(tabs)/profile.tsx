import ThemeSwitch from "@/components/ThemeSwitch";
import { getAuth, signOut } from "@react-native-firebase/auth";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <SafeAreaView className="flex-1 p-4 dark:bg-zinc-900 ">
      <View className="flex-row items-center justify-center border-b border-gray-600 pb-4 ">
        <Text className="font-bold text-4xl dark:text-white">Profile</Text>
        <ThemeSwitch />
      </View>
      <ScrollView contentContainerClassName="flex-1 flex-col items-center p-4 pt-6 justify-center gap-8  ">
        <Image
          className="size-36 rounded-full border border-gray-500  "
          source={{ uri: user?.photoURL || "" }}
        />
        <View className="gap-2 items-center dark:text-white">
          <Text className="dark:text-white">Name</Text>
          <Text className="font-bold text-2xl dark:text-white">
            {user?.displayName}
          </Text>
        </View>
        <View className="gap-2 items-center">
          <Text className="dark:text-white">Email</Text>
          <Text className="font-bold text-2xl dark:text-white">
            {user?.email}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            signOut(getAuth()).then(() => console.warn("User signed out!"))
          }
          className=" border-2 border-gray-500 rounded-xl px-6 py-4  items-center justify-center mt-6"
        >
          <Text className="font-bold text-xl dark:text-white">Signout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
