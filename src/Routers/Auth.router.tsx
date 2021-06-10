import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screen/Auth/Login';

const AuthStack = createStackNavigator();

const Auth: React.FC = () => {
  return(
    <AuthStack.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: "#312e38"}}}
    >
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  )
}

export default Auth