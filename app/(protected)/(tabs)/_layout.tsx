import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Text } from "react-native";
export default function TabsLayout() {
  const scheme = useColorScheme(); // 'light' | 'dark'
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor:
            scheme.colorScheme === "dark" ? "white" : "black",

          
        
          tabBarStyle: {
            backgroundColor: scheme.colorScheme === "dark" ? "#000" : "white",
            height:90,
            paddingTop:10
          },
          
   
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Notes",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="notes" size={32} color={color} />
            ),
            tabBarLabel: ({ focused, color }) =>
              focused ? (
                <Text style={{ color, fontSize: 14, marginTop: 4 }}>Notes</Text>
              ) : null,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={32} color={color} />
            ),
            tabBarLabel: ({ focused, color }) =>
              focused ? (
                <Text style={{ color, fontSize: 14, marginTop: 4 }}>
                  Profile
                </Text>
              ) : null,
          }}
        />
      </Tabs>
    </>
  );
}
