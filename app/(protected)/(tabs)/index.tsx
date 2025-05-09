import ThemeSwitch from "@/components/ThemeSwitch";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <SafeAreaView className="flex-1 p-4 dark:bg-zinc-900 ">
        <View className="flex-row items-center justify-center border-b border-gray-600 pb-4 ">
          <Text className="font-bold text-4xl dark:text-white">Notes</Text>
          <ThemeSwitch />
        </View>
      </SafeAreaView>
    </>
  );
}
