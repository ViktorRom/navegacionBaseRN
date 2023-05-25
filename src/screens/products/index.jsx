import React from 'react'
import {SafeAreaView, FlatList, View, Text} from "react-native";
import {styles} from './styles';
import { PRODUCTS } from '../../constants';
import { ProductItem } from '../../components';

const Products = ({navigation, route}) =>{

    const {categoryId} = route.params;
    console.warn('categoryId', categoryId);
    const onSelected =(item)=>{
        navigation.navigate('Product',{
           productId:item.id
           })
    }
    const filteredProducts = PRODUCTS.filter((product)=> product.category === categoryId);
    const renderItem =({item})=> <ProductItem item={item} onSelected={onSelected}/>
    const keyExtractor = (item)=>{item.id.toString()};
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                />
      </SafeAreaView>
    )
}

export default Products;