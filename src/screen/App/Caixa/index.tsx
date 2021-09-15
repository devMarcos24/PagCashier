import 'react-native-gesture-handler'
import React, { useState } from "react"
import { Container, HeadContainer,SafeAreaView, HeadContainerTitle, ButtonAdd, ButtonAddText, ListPayment, ListPaymentItem, TextValue, IconComponent} from './styles'
import ImageDefault from '../../../assets/userDefault.jpeg'
import {useAuth} from '../../../hooks/auth'
import {useNavigation} from '@react-navigation/native'
import ModalAddRemove from '../../../components/ModalAddRemove'

const Caixa = () => {
  const [isClose, setIsClose] = useState(false)
  const [isCloseRemove, setIsCloseRemove] = useState(false)
  const navigation = useNavigation()
  const {user} = useAuth()

  const list = [
    {type: 'received', value: 50},
    {type: 'received', value: 50},
    {type: 'removed', value: 50},
    {type: 'received', value: 50},
  ]

  return (
    <>
      <HeadContainer>
        <SafeAreaView>
          <HeadContainerTitle>R$ 100,00</HeadContainerTitle>
        </SafeAreaView>
      </HeadContainer>
      <ListPayment>
      {list.map((item) => (
        <ListPaymentItem>
          <IconComponent name={item.type === 'received' ? "arrow-up-right" : "arrow-down-left"} color={item.type === 'received' ? "green" : "red"} />
          <TextValue>{item.value}</TextValue>
        </ListPaymentItem>
      ))}
      </ListPayment>
      <Container>
        <ButtonAdd onPress={() => setIsClose(!isClose)}>
          <ButtonAddText>Adicionar</ButtonAddText>
        </ButtonAdd>
        <ButtonAdd onPress={() => setIsClose(!isClose)}>
          <ButtonAddText>Remover</ButtonAddText>
        </ButtonAdd>
      </Container>
      {isClose && <ModalAddRemove isClose={isClose} setIsClose={setIsClose}/>}
    </> 
  )
}

export default Caixa