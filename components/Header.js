import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import assets from '../assets';


export default function Header() {
  return (
      <View
          style={{
              flexDirection: 'row',
              justifyContent:'space-between',
              marginHorizontal: 16,
              alignItems:'center',
    }}>
          <View>
              <Text style={{
                  color: '#1B2028',
                  fontFamily: 'EncodeRegular',
                  fontSize:14,
              }}>Hello, Welcome </Text>
              <Text style={{
                  color: '#1B2028',
                  fontFamily: 'EncodeBold',
                  marginTop:4,
                  fontSize:16,
              }}>Albert Stevano </Text>
          </View>
          <Pressable>
              <Image
                  style={{
                      borderRadius:20,
                      width: 40,
                      height:40,
                  }}
                  source={assets.avatar} />
          </Pressable>
    </View>
  )
}