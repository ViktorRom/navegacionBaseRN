import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import {styles} from './styles'

const CartItem =({item, onRemove})=>{

 
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.bodycontainer}>
                <View style={styles.content}>
                    <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    <Text style={styles.price}>Price: {item.price}</Text>
                </View>
                <TouchableOpacity onPress={()=> onRemove(item.id)}>
                    <Text style={styles.deleteItem}>Delete de item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CartItem;