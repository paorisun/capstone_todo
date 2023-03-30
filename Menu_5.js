import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

function Menu_5() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>업데이트를</Text>
      <Text style={styles.text}>기다려주세요</Text>
      <Text style={styles.text}>😥</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    fontWeight:'bold'
  }
})

export default Menu_5;
