import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "@rneui/themed";
import { Login } from "../screens/account/login/Login";
import { ListProducts } from "../screens/ListProducts";


import { Register } from "../screens/account/register/Register";


const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

    return (


        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#FF0000",
            tabBarInactiveTintColor: "#000000",
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size),

        })}>
            
            <Tab.Screen name="Login" component={Login} />

            <Tab.Screen name="ListProducts" component={ListProducts} options={{ title: "Lista de Productos" }} />
            
            
            <Tab.Screen name="Register" component={Register} options={{ title: "Registro" }} />

        </Tab.Navigator>
    );
};


const screenOptions = (route, color, size) => {
    let iconName;
    if (route.name == "Login") {
        iconName = "user"
    }

    if (route.name == "ListProducts") {
        iconName = "navicon"
    }

      

    if (route.name == "Register") {
        iconName = "gear"
    }

    return (
        <Icon type="evilicon" name={iconName} color={color} size={size} />
    );


};