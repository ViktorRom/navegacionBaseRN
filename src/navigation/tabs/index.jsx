import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StoreNavigator from "../store";
import OrdersNavigator from "../orders";
import CartNavigator from "../carts";

const BottomTab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <BottomTab.Navigator initialRouteName="StoreTab"
            screenOptions={{
                headerShown :false,}
            }>
            <BottomTab.Screen name='StoreTab' component={StoreNavigator} options={{
              tabBarLabel:"Store"  
            }}/>
            <BottomTab.Screen name='OrderTabs' component={OrdersNavigator} options={{
              tabBarLabel:"Orders"  
            }}/>
            <BottomTab.Screen name='CartTab' component={CartNavigator} options={{
              tabBarLabel:"Cart"  
            }}/>
        </BottomTab.Navigator>
    );
};

export default TabNavigation;