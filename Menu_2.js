import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

function Menu_2() {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const onChange = ({ window }) => {
      setWindowWidth(window.width);
      setWindowHeight(window.height);
    };

    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>2번 메뉴</Text>
      <Text>width={windowWidth}</Text>
      <Text>height={windowHeight}</Text>
      <View style={[styles.container, { width: windowWidth / 3, height: windowHeight / 3 }]}>
        {/* width와 height 값을 윈도우의 가로, 세로 크기에 맞게 조정 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default Menu_2;
