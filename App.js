import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Text style={styles.topFrameToday}>
          2023년 3월
        </Text>
      </View>
      <View style={styles.middleFrame}>
        <Text style={styles.contents}>
          contents
        </Text>    
      </View>
      <View style={styles.bottomFrame}>
        <Text style={styles.menuBar}>
          메뉴바
        </Text>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topFrame: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  topFrameToday: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  middleFrame: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomFrame: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  menuBar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});


