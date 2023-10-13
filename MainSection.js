import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import FaceButton from './components/FaceButton'
import ObjectDtc from './components/ObjectDtc'
// import VoiceTest from './components/FaceButton'

export default function mainSection() {
  return (
    <View style={styles.MainSect}>

      <FaceButton/>
      {/* <VoiceTest/> */}
      <ObjectDtc/>

    </View>
  )
}

const styles = StyleSheet.create({

    MainSect:{
        fontWeight: 'bold',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        height: '50%',
        marginTop: '40%',
    }

})