import React from "react"; 
import { View ,Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./styles";

const ProductItem =({item, onSelected})=>{

    return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.containerTouchable} onPress={()=> onSelected(item)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Price:{item.price}</Text>
            <Text style={styles.transmission}>Transmission:{item.transmission}</Text>
        </TouchableOpacity>
    </View>
);
}
export default ProductItem;