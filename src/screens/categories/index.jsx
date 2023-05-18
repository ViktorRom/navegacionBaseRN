import React from 'react'
import {View, Text, Button} from "react-native";
import {styles} from './styles';

const Categories =({navigation})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Categories</Text>
            <Button
                title='Go to product'
                onPress={()=> navigation.navigate("Products")}
            />
        </View>
    )
}

export default Categories;