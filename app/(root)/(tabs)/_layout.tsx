import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants";

interface TabIconProps {
  focused: boolean;
  source: ImageSourcePropType;
}

const TabIcon = ({ source, focused }: TabIconProps) => (
  <View
    className={`rounded-full size-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}
  >
    <Image
      source={source}
      tintColor={"white"}
      resizeMode={"contain"}
      className={"size-7"}
    />
  </View>
);

const Layout = () => (
  <Tabs
    initialRouteName={"home"}
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#333333",
        borderRadius: 50,
        paddingBottom: 25, // Not sure why the flex isn't working properly
        overflow: "hidden",
        marginHorizontal: 20,
        marginBottom: 20,
        height: 75,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
      },
    }}
  >
    <Tabs.Screen
      name={"home"}
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name={"rides"}
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
    <Tabs.Screen
      name={"profile"}
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
    <Tabs.Screen
      name={"chat"}
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;
