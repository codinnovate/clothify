import { Text, Pressable } from 'react-native'
import React from 'react'

export default function FilterItems({text, Icon}) {
  return (
      <Pressable style={{
      paddingVertical: 8,
      minWidth: 66,
        width:99,
        flexDirection:'row',
          paddingHorizontal: 12,
          borderWidth: 1,
      height: 36,
          alignItems:'center',
          borderRadius: 8,
          borderColor:'#EDEDED'
      }}>
          {Icon}
          <Text
              style={{
                  color: '#1e2028',
                  fontSize:12,
                  fontFamily:'EncodeMedium',
                  marginLeft: 4
              
      }}>{text}</Text>
    </Pressable>
  )
}