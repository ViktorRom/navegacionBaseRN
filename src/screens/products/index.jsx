import React from 'react'
import {SafeAreaView, FlatList, View, Text} from "react-native";
import {styles} from './styles';
import { PRODUCTS } from '../../constants';
import { ProductItem } from '../../components';

const Products = ({navigation, route}) =>{

    const {categoryId} = route.params;
    const onSelected =(item)=>{
        navigation.navigate('Product',{
           productId:item.id
           })
    }
    const filteredProducts = PRODUCTS.filter((product)=> product.category === categoryId);
    const renderItem =({item})=> <ProductItem item={item} onSelected={onSelected}/>
    const keyExtractor = (item)=>{item.id};
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
      </SafeAreaView>
    )
}

export default Products;