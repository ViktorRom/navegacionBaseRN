import React from "react";
import {View, FlatList, TouchableOpacity, Text} from 'react-native'
import {styles} from './styles'
import { CART } from "../../constants/data/cart";
import { CartItem } from "../../components";

const Cart =()=>{

    const onRemove=(item)=>{
        console.warn(item); 
    }

    const TOTAL = 2000//CART.forEach((item)=> {total+=item.price; return total});
     const renderItem = ({item})=> <CartItem item={item}  onRemove={onRemove}/>
     const keyExtractor = (item)=> {item.id}
    return(
        <View style={styles.container}>
            <FlatList
                data={CART}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.listContainer}

            />
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.buttomConfirm} onPress={()=>null}>
                   <Text style={styles.buttomConfirmText}>Confirm</Text> 
                   <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total:</Text>
                        <Text style={styles.totalAmount}>{TOTAL}</Text>
                   </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;