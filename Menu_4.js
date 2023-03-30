import React from "react";
import { View, Text } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faMugHot, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

library.add(faCheckSquare, faMugHot, faHome);

function Menu_4() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>4번 메뉴</Text>
      <View>
        <FontAwesomeIcon icon={['fas', 'check-square']} />
        <FontAwesomeIcon icon={['fas', 'home']} />
        <Text>Favorite beverage: </Text>
        <FontAwesomeIcon icon={['fas', 'mug-hot']} />
        <Text>Favorite beverage: Coffee</Text>
      </View>
    </View>
  );
}

export default Menu_4;
