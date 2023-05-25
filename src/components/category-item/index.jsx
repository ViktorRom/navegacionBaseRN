import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

const CategoryItem = ({item, onSelected}) => {
    return(
        <View styles={styles.container}>
            <TouchableOpacity style={ { ...styles.containerTouchable ,backgroundColor:item.color }} onPress={()=> onSelected(item)}>
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );  
};
 export default CategoryItem;