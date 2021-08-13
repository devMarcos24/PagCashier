import 'react-native-gesture-handler'
import React from "react"
import Routers from "./Routers"
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AppProvider from './hooks'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <AppProvider>
        <Routers />
      </AppProvider>
    </NavigationContainer>
  )
}

export default App