import { FlatList,View, Text } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import assets from '../assets'

export default function Products() {
    const products = [
        { name: "Nike Shoe Light", price: "212.99", category: 'Shoes', image:assets.p1 },
        {name:"Gucci Bag New", price:"12.99", category:'Bags', image:assets.p2},
        {name:"Moder ligt Dress", price:"20.99", category:'dress', image:assets.p3},
        {name:"Big Onions Knives", price:"52.99", category:'Knives', image:assets.p4},
        {name:"Glasses for indoors", price:"92.99", category:'Glasses', image:assets.p1},
    ]

    const renderItem = ({item}) => <ProductCard products={products}/>
    
    
  return (
      <View
          style={{
          paddingHorizontal:20,
              marginTop: 26,
          
      }}>
          <FlatList
              numColumns={2} 
              data={products}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={{
                  gap: 20,
                  
              }} />

    </View>
  )
}