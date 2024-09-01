import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { widthScale, heightScale, moderateScale } from "../../utils/scale";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          // height: heightScale(60),
          backgroundColor: "#25485E",
          // padding: 5,
        },
        tabBarItemStyle: {
          height: heightScale(50),
        },
        tabBarLabelStyle: {},
        
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="home" size={moderateScale(20)} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="search1" size={moderateScale(20)} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="myquotes"
        options={{
          title: "My Quotes",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="book" size={moderateScale(20)} color="white" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
