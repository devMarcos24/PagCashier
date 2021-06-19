import 'react-native-gesture-handler'
import React from "react"
import {useAuth} from '../../../hooks/auth'
import { View, SafeAreaView, Text } from "react-native"

const App = () => {
  const {signOut} = useAuth()
  return (
      <SafeAreaView>
        <View>
          <Text>Hello Home</Text>
        </View>
        <View>
          <Text onPress={signOut}>Sair</Text>
        </View>
      </SafeAreaView>
  )
}

export default App