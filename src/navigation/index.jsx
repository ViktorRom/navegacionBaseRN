import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabNavigator from "./tabs";


const BottomTab = createBottomTabNavigator();
const TabNavigation = () =>{
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
};

export default TabNavigation;