import 'react-native-gesture-handler'
import React from "react"
import {useAuth} from '../../../hooks/auth'
import { Container, HeadContainer,SafeAreaView, HeadContainerPicture, HeadContainerTitle } from './styles'
import { Image } from 'react-native'
import ButtonComponent from '../../../components/Button'
import ImageDefault from '../../../assets/userDefault.jpeg'
import {useNavigation} from '@react-navigation/native'

const Menu = () => {
  const navigation = useNavigation()
  const {signOut} = useAuth()
  return (
      <Container>
        <HeadContainer>
        <SafeAreaView>
        <HeadContainerTitle>Menu Principal</HeadContainerTitle>
          <HeadContainerPicture onPress={() => navigation.goBack()}>
            <Image style={{maxWidth: 55, maxHeight: 55, borderRadius: 25.5}} source={ImageDefault}/>
          </HeadContainerPicture>
        </SafeAreaView>
        </HeadContainer>
        <ButtonComponent onPress={signOut} style={{position: "absolute", bottom: "4%", width: "80%", alignSelf:'center'}}>Sair</ButtonComponent>

      </Container>
  )
}

export default Menu