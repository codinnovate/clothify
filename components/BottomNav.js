import { View, Text } from 'react-native'
import React from 'react'
import NavItems from './NavItems'
import Svg, { Path } from 'react-native-svg';

export default function BottomNav() {
  return (
      <View style={{
          backgroundColor: '#292526',
          paddingHorizontal: 16,
          paddingVertical: 12,
          height: 64,
          flexDirection:'row',
          alignItems: 'center',
          justifyContent:'space-between',
          marginHorizontal: 20,
          borderRadius:40,
          
    }}>
          <NavItems
              icon={<Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M20.04 6.82L14.28 2.79C12.71 1.69 10.3 1.75 8.78999 2.92L3.77999 6.83C2.77999 7.61 1.98999 9.21 1.98999 10.47V17.37C1.98999 19.92 4.05999 22 6.60999 22H17.39C19.94 22 22.01 19.93 22.01 17.38V10.6C22.01 9.25 21.14 7.59 20.04 6.82ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z" fill="white"/>
                    </Svg>
          } />
          <NavItems
              icon={<Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path d="M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M20.41 17.03H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
              }
          />
          <NavItems
              icon={<Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>}
          />

          <NavItems
              icon={<Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <Path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z" stroke="#EDEDED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z" stroke="#EDEDED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>}
              
          />
      </View>
  )
}