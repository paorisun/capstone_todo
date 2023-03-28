import React, { useState } from 'react';
import { View, Modal, Text, Button, StyleSheet, TextInput } from 'react-native';

const CustomModal = ({ modalVisible, toggleModal }) => {
  //const [inputValue, setInputValue] = useState('');
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.cotain1}>
            <TextInput
            placeholder="할일을 입력하세요"
            style={styles.textinput}
            //onChangeText={text => setInputValue(text)}
          />
          </View>
          <View style={styles.cotain1}>
            <Text style={styles.modaltext}>시간</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              //onChangeText={text => setInputValue(text)}
            />
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              //onChangeText={text => setInputValue(text)}
            />
          </View>
          <View style={styles.cotain1}>
            <Text style={styles.modaltext}>알람</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              //onChangeText={text => setInputValue(text)}
            />
            <Text style={styles.modaltext}>분전</Text>
          </View>
          <View style={styles.cotain1}>
            <Text style={styles.modaltext}>장소</Text>
            <TextInput 
              placeholder="장소를 검색하세요"
              style={styles.textinput2}
              //onChangeText={text => setInputValue(text)}
            />
          </View>
          <View style={styles.cotain1}>
            <Text style={styles.modaltext}>태그</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              //onChangeText={text => setInputValue(text)}
            />
          </View>
          <View style={styles.cotain1}>
            <Text style={styles.modaltext}>중요</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              //onChangeText={text => setInputValue(text)}
            />
          </View>
          <View style={styles.cotain1}>
            <Button title="저장" onPress={toggleModal} />
            <Button title="취소" onPress={toggleModal} />
          </View>
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명한 회색 배경
  },
  cotain1:{
    flexDirection: 'row',
    alignItems: 'center'    
  },
  modaltext:{
    fontSize:20,
    marginRight:10,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginLeft: 20, // 좌우 여백
    marginRight: 20,
    marginTop: 100, // 상하 여백
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    flex:1,
    fontSize: 15,
    fontWeight: 'bold',
    height:40,
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  textinput2: {
    marginRight:10,
    flex:1,
    fontSize: 15,
    fontWeight: 'bold',
    height: 40,
    width: 70,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  }
});

export default CustomModal;