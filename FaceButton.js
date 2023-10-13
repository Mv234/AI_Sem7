import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from 'react';
// import { VoiceModule } from '@react-native-voice/voice/dist/VoiceModuleTypes'
// import Voice from '@eact-native-voice/voice'
import Voice from '@react-native-voice/voice';


export default function FaceButton() {


  // console.log(Voice.isAvailable());

  // const onStartButtonPress = () =>{
  //   console.log('working');
  //   try {
  //     console.log(Voice.isAvailable());
      
  //   } catch (error) {
  //     console.error(e);
  //   }
  // }
  
  const onStartButtonPress = (event) =>{
    console.log('working');
    console.log(event);
    try{
      console.log(Voice.isAvailable());
    }
    catch(error){
      console.log(error);
    }

  }
  

  return (
    <View>

      <TouchableOpacity style={styles.FaceBtn}  onPress={(event) => onStartButtonPress(event)}>
        <Text style={styles.BtnText}>Face Detection</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

  FaceBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    height: 'auto',
    padding: 20,
    fontSize: 30,
    borderRadius: 20,
  },

  BtnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  }

})
