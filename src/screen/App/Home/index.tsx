import 'react-native-gesture-handler'
import React from "react"
import {useAuth} from '../../../hooks/auth'
import { Container, HeadContainer,SafeAreaView, HeadContainerPicture, HeadContainerTitle } from './styles'
import { Image } from 'react-native'
import ImageDefault from '../../../assets/userDefault.jpeg'
import {useNavigation} from '@react-navigation/native'

const App = () => {
  const navigation = useNavigation()
  const {signOut} = useAuth()
  return (
      <Container>
        <HeadContainer>
        <SafeAreaView>
        <HeadContainerTitle>Marcos Menezes</HeadContainerTitle>
          <HeadContainerPicture onPress={() =>navigation.navigate("Menu")}>
            <Image style={{maxWidth: 55, maxHeight: 55, borderRadius: 25.5}} source={ImageDefault}/>
          </HeadContainerPicture>
        </SafeAreaView>
        </HeadContainer>


      </Container>
  )
}

export default App