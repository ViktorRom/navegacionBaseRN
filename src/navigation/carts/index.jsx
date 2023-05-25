import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Cart, Orders } from '../../screens';
import { COLORS } from '../../constants';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Cart" screenOptions={{
            headerStyle:{
                backgroundColor:COLORS.secundary,
            },
            headerTintColor : COLORS.text,
        }}>
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    );
};

export default CartNavigator;