import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Product, Products, Categories } from "../../screens";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const MainNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
            headerStyle:{
                backgroundColor:COLORS.secundary,
            },
            headerTintColor : COLORS.text,
        }}>
            <Stack.Screen name="Categories" component={Categories} options={({route})=>({
             //   title: route.params.name,
            })}
            />
            <Stack.Screen name="Products" component={Products} options={({route})=>({
             //   title: route.params.name,
            })}
            />
            <Stack.Screen name="Product" component={Product}/>
        </Stack.Navigator>

    );
};
export default MainNavigator;