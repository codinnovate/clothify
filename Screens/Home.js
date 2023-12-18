import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { Path, Svg } from 'react-native-svg';
import Category from '../components/Category';
import BottomNav from '../components/BottomNav';
import Products from '../components/Products';


export default function Home() {
  return (
    <View
      style={{
        paddingVertical: 16,
        height: '100%',
        // position:'relative',
      backgroundColor: '#fff',
    }}>
      <Header />
      <View
        style={{
          marginTop: 24,
          width: '100%',
          justifyContent:'space-between',
          flexDirection:'row',
          alignItems:'center',
          paddingHorizontal:16,
      }}>
        <Search />
        <Pressable
          style={{
            padding: 13,
            borderRadius: 13,
            height: 49,
            width: 48,
            justifyContent: 'center',
            alignItems:'center',
          backgroundColor:'#292526'
        }}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <Path d="M7.33017 13.5929H1.02945" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M10.1405 3.90037H16.4412" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.72629 3.84625C5.72629 2.5506 4.66813 1.5 3.36314 1.5C2.05816 1.5 1 2.5506 1 3.84625C1 5.14191 2.05816 6.19251 3.36314 6.19251C4.66813 6.19251 5.72629 5.14191 5.72629 3.84625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M17 13.5537C17 12.2581 15.9427 11.2075 14.6377 11.2075C13.3319 11.2075 12.2737 12.2581 12.2737 13.5537C12.2737 14.8494 13.3319 15.9 14.6377 15.9C15.9427 15.9 17 14.8494 17 13.5537Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        </Pressable>
        
      </View>

      <Category />
      <Products />
     
      <BottomNav />
    </View>
  )
}