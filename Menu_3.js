import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import CustomModal from "./Modal";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
function Menu_3() {
  const startCount = 1; // 시작 값
  const totalCount = 30; // 전체 버튼 개수
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const buttons = Array(totalCount).fill(startCount);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [selectedCount, setSelectedCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
    setSelectedCount(0);
  };

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  return (
    <View>
      <Text style={styles.toptext}>
        {currentYear}년 {currentMonth}월
      </Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          {buttons.map((count, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedButtonIndex === index ? styles.selectedButton : null,
              ]}
              onPress={() => handleButtonPress(index)}
            >
              <Text style={styles.buttonText}>{count + index}</Text>
              <Text style={styles.dayText}>{days[index % 7]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mcontainer}>
        <CustomModal modalVisible={modalVisible} toggleModal={toggleModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "gray",
  },
  emContainer: {
    marginBottom: 450,
    backgroundColor: "Yellow",
  },
  toptext: {
    fontSize: 30,
    color: "black",
    backgroundColor: "#FFFCFC",
  },
  addtext: {
    fontSize: 25,
    color: "white",
    backgroundColor: "black",
  },
  todo: {
    color: "white",
    fontSize: 0,
    backgroundColor: "gray",
    height: 100,
  },
  button: {
    // 상단 날짜버튼
    width: 50,
    height: 50,
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 8,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedButton: {
    // 선택된 상단 버튼
    backgroundColor: "#37C7C7",
  },
  buttonText: {
    color: "#313131",
    fontSize: 25,
    fontWeight: "bold",
  },
  dayText: {
    color: "#313131",
    fontSize: 10,
    fontWeight: "bold",
  },
  addButtonContainer: {
    marginTop: height / 1.52,
    marginLeft: width / 1.26,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#37C7C7",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 40,
    color: "white",
  },
  mcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Menu_3;
