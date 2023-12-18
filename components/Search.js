import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg';


export default function Search() {
  return (
      <View
        style={{
              height: 49,
              borderColor: '#878787',
              borderRadius: 12,
              borderWidth:1,
              paddingVertical: 14,
              paddingHorizontal: 16,
              position: 'relative',
        gap: 8,
              width:'85%',
              flexDirection: 'row',
              alignItems:'center',
          }}>
          <Svg
              style={{
                  position: 'absolute',
                  left:16,

                  
              }}
              xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <Circle cx="8.80547" cy="8.3055" r="7.49047" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M14.0153 13.9043L16.9519 16.8333" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
          <TextInput
              style={{
                  height: '100%',
                  paddingLeft:22,
              }}
              placeholder='Search clothes' />
    </View>
  )
}