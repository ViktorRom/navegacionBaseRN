import React from 'react'
import {View, Text, Image} from "react-native";
import {styles} from './styles';
import { PRODUCTS } from '../../constants';

const Product =({route})=>{

    const {productId} = route.params;
    
    const product = PRODUCTS.find((product) => product.id===productId);

    console.warn(product)

    return(
        <View style={styles.container}>
            <Image  source={{uri:product.img}} style={styles.image}/>
            <Text>{product.name}</Text>
        </View>
    )
}

export default Product;