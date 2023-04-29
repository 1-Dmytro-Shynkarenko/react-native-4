import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Image } from "react-native";

//screens
import screens from "../screens";
const { CreateScreen, PostsScreen, ProfileScreen } = screens;

//icons
const backIcon = require("../assets/icon/arrow-left.png");
const LogOutIcon = require("../assets/icon/log-out.png");

const MainTab = createBottomTabNavigator();

export default function Home({ navigation, route }) {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        // syyle={{ display: "none" }}
        name="PostsScreen"
        options={{
          title: "Публикации",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="view-list"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={LogOutIcon} style={{ marginRight: 16 }} />
            </TouchableOpacity>
          ),
        }}
        component={PostsScreen}
      />
      <MainTab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarVisible: false,
          title: "Создать публикацию",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="add-circle"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ padding: 10 }}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Image source={backIcon} style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
          tabBarVisible: true,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="account-circle"
              size={focused ? 44 : 34}
              color={focused ? "orange" : color}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}
