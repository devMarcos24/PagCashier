import 'react-native-gesture-handler'
import React from "react"
import { Container, HeadContainer,SafeAreaView, HeadContainerPicture, HeadContainerTitle, ImageSettings, Menu, MenuItem } from './styles'
import ImageDefault from '../../../assets/userDefault.jpeg'
import {useAuth} from '../../../hooks/auth'
import {useNavigation} from '@react-navigation/native'
import Caroussel from '../../../components/Caroussel'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text } from '../../../components/Button/styles'

const Home = () => {
  const navigation = useNavigation()
  const {user} = useAuth()

  const urlImg = 'https://media-exp1.licdn.com/dms/image/C4D03AQGgDEpY5Anjqw/profile-displayphoto-shrink_200_200/0/1623867882112?e=1634774400&v=beta&t=tqHO4uSF6tZ-L9UoZhxSMUjHtiyheTdaZyFRhbE-upU'

  const dataList:Array<any> = [
    {
      id: 1,
      title: 'propraganda 1',
      description: 'testando app novo',
      image: 'https://miro.medium.com/max/700/1*uEImESJuQA-lS76C5JrOag.jpeg'
    },
    {
      id: 2,
      title: 'propraganda 2',
      description: 'testando app novo',
      image: 'https://www.premiumplanejados.com.br/wp-content/uploads/2020/09/como-montar-uma-cozinha-multifuncional-1200x675.jpg'
    },
    {
      id: 3,
      title: 'propraganda 3',
      description: 'testando app novo',
      image: 'https://www.colchaocostarica.com.br/produtos/adicionais/33903-117797-cozinha-completa-henn-connect-c--15-pecas--1-torre-quente---.jpg'
    }
  ]

  return (
      <Container>
        <HeadContainer>
        <SafeAreaView>
        <HeadContainerTitle>Marcos Menezes</HeadContainerTitle>
          <HeadContainerPicture onPress={() =>navigation.navigate("Menu")}>
            <ImageSettings source={urlImg ? {uri: urlImg} : ImageDefault}/>
          </HeadContainerPicture>
        </SafeAreaView>
        <Caroussel data={dataList}/>
        </HeadContainer>
        <Menu>
          <MenuItem onPress={() => navigation.navigate('Caixa')}>
            <Icon name="cash-register" size={40} color="grey"/>
            <Text style={{marginTop: 10, fontFamily: "arial", fontSize: 20}}>Caixa</Text>
          </MenuItem>
          <MenuItem>
          </MenuItem>
          <MenuItem>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </Menu>
      </Container>
  )
}

export default Home