import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';import Login from './Login'
import SignUp from './SignUp'
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import themes from './styles/theme.style';
const Route = createStackNavigator(
{
 Login: { screen: Login},
 SignUp: { screen: SignUp},
  Products: { screen: Products},
  Checkout: { screen: Checkout},
 
},


{
 navigationOptions: {
    headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
 }
}
);

let Navigation = createAppContainer(Route);

export default Navigation;