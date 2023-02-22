import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOpetions from '../components/NavOpetions'
import MapScreen from './MapScreen'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View >
        <Image style={{width:100, height: 80, resizeMode:"contain",}}  source={require("../images/logo.png")}/>
      </View>
      <NavOpetions/>
    </SafeAreaView>
  )
}

export default HomeScreen