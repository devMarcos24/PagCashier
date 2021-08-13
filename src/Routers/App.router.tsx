import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import Login from '../screen/App/Home';
import Menu from '../screen/App/Menu';

const AuthStack = createStackNavigator();

const App: React.FC = () => {
  return(
    <AuthStack.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: "#312e38"}}}
    >
      <AuthStack.Screen name="Home" component={Login} />
      <AuthStack.Screen name="Menu" component={Menu} />
    </AuthStack.Navigator>
  )
}

export default App