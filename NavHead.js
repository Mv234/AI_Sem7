import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function NavHead() {
  return (
    <View>
        <Text style={styles.textStyle}>AI powered Audio Sense</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    textStyle:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        backgroundColor: 'rgba(255, 255, 0, 0.45)',
    }

})