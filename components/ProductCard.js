import { View, Text,Image } from 'react-native'
import React from 'react';
import Svg, { Path } from 'react-native-svg';


export default function ProductCard({products}) {
  return (
      <View style={{
          width: '48%',
          backgroundColor:'#ddd'
      }}> 
          <View
              style={{
              position: 'relative',
              
          }}>
              <Image
                  source={products.image} />
              <View>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Path d="M8.41333 13.8733C8.18666 13.9533 7.81333 13.9533 7.58666 13.8733C5.65333 13.2133 1.33333 10.46 1.33333 5.79333C1.33333 3.73333 2.99333 2.06667 5.03999 2.06667C6.25333 2.06667 7.32666 2.65333 8 3.56C8.67333 2.65333 9.75333 2.06667 10.96 2.06667C13.0067 2.06667 14.6667 3.73333 14.6667 5.79333C14.6667 10.46 10.3467 13.2133 8.41333 13.8733Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
              </View>
          </View>

          <View>
              <Text>{products.name}</Text>
              <Text>{products.category}</Text>
              <View>
                  <Text>{products.price}</Text>
                  <Text>
                      <Svg
                          style={{
                          marginRight:8
                      }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <Path d="M15.9627 6.20683L11.4996 5.5582L9.50449 1.51347C9.45 1.40273 9.36035 1.31308 9.24961 1.25859C8.97187 1.12148 8.63437 1.23574 8.49551 1.51347L6.50039 5.5582L2.0373 6.20683C1.91426 6.22441 1.80176 6.28242 1.71562 6.37031C1.61149 6.47734 1.55411 6.62133 1.55609 6.77064C1.55807 6.91995 1.61924 7.06237 1.72617 7.1666L4.95527 10.3148L4.19238 14.7603C4.17449 14.8638 4.18593 14.9701 4.22541 15.0674C4.26489 15.1646 4.33083 15.2488 4.41574 15.3105C4.50066 15.3722 4.60116 15.4088 4.70584 15.4163C4.81052 15.4237 4.9152 15.4017 5.00801 15.3527L9 13.2539L12.992 15.3527C13.101 15.4107 13.2275 15.4301 13.3488 15.409C13.6547 15.3562 13.8604 15.0662 13.8076 14.7603L13.0447 10.3148L16.2738 7.1666C16.3617 7.08047 16.4197 6.96797 16.4373 6.84492C16.4848 6.5373 16.2703 6.25254 15.9627 6.20683Z" fill="#FFD33C"/>
                      </Svg>
                      5.0</Text>
              </View>
          </View>
    </View>
  )
}