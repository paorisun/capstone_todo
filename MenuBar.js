import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu_1 from "./Menu_1";
import Menu_2 from "./Menu_2";
import Menu_3 from "./Menu_3";
import Menu_4 from "./Menu_4";
import Menu_5 from "./Menu_5";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function MenuBar() {
  return (
    <Tab.Navigator
      initialRouteName="3"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black", height: 60, flex: 0.08 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="1"
        component={Menu_1}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={25}
              style={{ color: focused ? "white" : "grey" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="2"
        component={Menu_2}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={25}
              style={{ color: focused ? "white" : "grey" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="3"
        component={Menu_3}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={25}
              style={{ color: focused ? "white" : "grey" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="4"
        component={Menu_4}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={25}
              style={{ color: focused ? "white" : "grey" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="5"
        component={Menu_5}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={25}
              style={{ color: focused ? "white" : "grey" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
