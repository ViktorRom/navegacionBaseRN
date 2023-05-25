import React from 'react'
import {View, Text, Button, FlatList} from "react-native";
import {styles} from './styles';
import { CategoryItem } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../../constants';

const Categories =({navigation, route})=>{
    
  
    const categoryId = 2;
    const onSelected = (item)=>{
        navigation.navigate('Products',{
         categoryId:item.id,
         name: item.name
        })
   // console.warn(item)
    };
    const filteredItem = CATEGORIES.filter((category)=> category.id === categoryId);
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
    const keyExtractor = (item) => item.id.toString();
    return(
        <SafeAreaView styles={styles.container}>
            <FlatList 
                data={CATEGORIES} 
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    )
}

export default Categories;