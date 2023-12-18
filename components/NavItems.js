import { View, Pressable} from 'react-native'
import React from 'react'

export default function NavItems({icon}) {
  return (
      <Pressable style={{
          borderRadius: '50%',
          padding: 8,
          backgroundColor:'#FFFFFF0D'
    }}>
          {icon}
          <View></View>
    </Pressable>
  )
}