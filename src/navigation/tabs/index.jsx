import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StoreNavigator from "../store";
import OrdersNavigator from "../orders";
import CartNavigator from "../carts";

const BottomTab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name='StoreTab' component={StoreNavigator}/>
            <BottomTab.Screen name='OrderTabs' component={OrdersNavigator}/>
            <BottomTab.Screen name='CartTab' component={CartNavigator}/>
        </BottomTab.Navigator>
    );
};

export default TabNavigation;