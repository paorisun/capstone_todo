import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu_1 from "./Menu_1";
import Menu_2 from "./Menu_2";
import Menu_3 from "./Menu_3";
import Menu_4 from "./Menu_4";
import Menu_5 from "./Menu_5";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function MenuBar() {
  return (
    <Tab.Navigator initialRouteName="3" tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="1"
        component={Menu_1}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./icon/home_icon_sel.jpg")
                  : require("./icon/home_icon.jpg")
              }
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen name="2" component={Menu_2} />
      <Tab.Screen
        name="3"
        component={Menu_3}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./icon/home_icon_sel.jpg")
                  : require("./icon/home_icon.jpg")
              }
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen name="4" component={Menu_4} />
      <Tab.Screen name="5" component={Menu_5} />
    </Tab.Navigator>
  );
}
