import React from 'react'
import {View, Text, Image} from "react-native";
import {styles} from './styles';
import { PRODUCTS } from '../../constants';

const Product =({route})=>{

    const {productId} = route.params;
    
    const product = PRODUCTS.find((product) => product.id===productId);
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{uri:product.img}} style={styles.img}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>  
            </View>
        </View>
    )
}

export default Product;