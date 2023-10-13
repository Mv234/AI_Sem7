import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import NavHead from './src/components/NavHead';
const image = { uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=600' };
// import FaceButton from './src/components/FaceButton';
import MainSection from './src/MainSection';

const YourApp = () => {
  return (
    <SafeAreaView style={style.Container}>

      <ImageBackground source={image} resizeMode='cover' style={style.backgroundImage}>

        <NavHead />
        <MainSection/>

        
      </ImageBackground>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: 'rgba(120,120,140,0.65)',
    backgroundColor:'black',
  },
  backgroundImage: {
    flex: 1,
    // backgroundColor: 'rgba(120,120,140,0.65)',
    width: '100%',
    height: '100%',
  }

})

export default YourApp;