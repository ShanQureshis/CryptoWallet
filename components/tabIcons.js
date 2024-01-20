import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS,FONTS } from '../constants'


const TabIcons = ({focused,icon,iconStyle,label,isTrade}) => {
  if(isTrade){
    return (
      <View className="items-center justify-center w-14 h-14 rounded-full" style={{backgroundColor: COLORS.black}} >
        <Image
        source={icon}
        resizeMode="contain"
        className="w-6"
        style={{tintColor: COLORS.white, ...iconStyle}}
        />
        <Text style={{color: COLORS.white,fontSize:11,marginTop:-10,paddingBottom:12}}>Trade</Text>
      </View>
    )
  }
  else{
    return (
      <View className="items-center">
        <Image
        source={icon}
        resizeMode="contain"
        className="w-6"
        style={{tintColor: focused? COLORS.white:COLORS.secondary, ...iconStyle}}
        />
        <Text style={{color: focused?COLORS.white:COLORS.secondary,fontSize:11,marginTop:-10,paddingBottom:12}}>
          {label}
        </Text>
      </View>
    )
  }
  
}

export default TabIcons

