import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

function Menu_3() {
  const startCount = 1; // 시작 값
  const totalCount = 30; // 전체 버튼 개수
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
;
  const buttons = Array(totalCount).fill(startCount);
  
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
  }

  return (
    <View>
        <Text style={styles.toptext}>
          2023년 3월
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
                selectedButtonIndex === index ? styles.selectedButton : null
              ]}
              onPress={() => handleButtonPress(index)}
            >
              <Text style={styles.buttonText}>{count + index}</Text>
              <Text style={styles.dayText}>{days[index % 7]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.addtext}>
        + TODO 추가하기
      </Text>
      <Text style={styles.todo}>
        TO-DO example
      </Text>     
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'gray'
  },
  toptext:{
    fontSize:30
  },
  addtext:{
    fontSize:25
  },
  todo:{
    color: 'white',    
    fontSize:40,
    backgroundColor:'gray',
    height:100,
    
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  dayText: {
    color: 'white',
    fontSize: 10,
  },
});

export default Menu_3;
