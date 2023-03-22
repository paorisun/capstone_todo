import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function Menu_3() {
  const startCount = 1; // 시작 값
  const totalCount = 30; // 전체 버튼 개수
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const buttons = Array(totalCount).fill(startCount);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [selectedCount, setSelectedCount] = useState(0); // 추가

  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
    setSelectedCount(0);
  };

  const handleAddStar = () => { // 추가
    setSelectedCount(selectedCount + 1);
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
      <Text style={styles.addtext}>+ TODO 추가하기</Text>
      <Text style={styles.todo}>
        {selectedButtonIndex !== -1
          ? `${currentYear}.${currentMonth}.${selectedButtonIndex + 1}`
          : "TO-DO example"}
      </Text>
      <View style={styles.emContainer}>
          <Text style={styles.addtext}>
            {Array.from({ length: selectedCount }).map((_, index) => (
              <Text key={index}>👍</Text>
            ))}
          </Text>
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddStar}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "gray",
  },
  emContainer:{
    marginBottom:450,
    backgroundColor:"Yellow"
  },
  toptext: {
    fontSize: 30,
    color: "white",
    backgroundColor: "black",
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
  button: { // 상단 날짜버튼
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedButton: { // 선택된 상단 버튼
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  dayText: {
    color: "white",
    fontSize: 10,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 40,
    color: 'white',
  },
  
});

export default Menu_3;
