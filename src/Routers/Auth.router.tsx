import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screen/Auth/Login';
import SignIn from '../screen/Auth/SignIn';
import ForgotPassword from '../screen/Auth/ForgotPassword';

const AuthStack = createStackNavigator();

const Auth: React.FC = () => {
  return(
    <AuthStack.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: "#312e38"}}}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  )
}

export default Auth