import 'react-native-gesture-handler'
import React, { useRef } from "react"
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {useAuth} from '../../../hooks/auth'
import { SafeAreaView, Container, ContainerForgot } from './styles'
import Input from '../../../components/Input'
import ButtonComponent from '../../../components/Button'
import LogoComponent from '../../../components/Logo'
import BackButton from '../SignUp/BackButton'

const ForgotPassword = () => {
  const {forgotPassword} = useAuth()
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  const handleLogin = async (data: any) => {
    try {
      const { email } = data
      await forgotPassword(email)
      Alert.alert('Email enviado', 'Verifique seu email e altere sua senha atraves do link')
      navigation.goBack()
    } catch (error) {
      Alert.alert('Error ao recuperar senha', 'Não foi possivel recuperar a senha')
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <LogoComponent />
        <Form ref={formRef} onSubmit={handleLogin} >
          <Input 
            autoCapitalize="none" 
            autoCorrect={false} 
            ref={loginInputRef} 
            placeholder="E-mail" 
            name="email" 
            icon="mail" 
          />
          <ContainerForgot>
            <BackButton 
              onPress={() => navigation.goBack()}>
                Cancelar
            </BackButton>
            <ButtonComponent 
              onPress={() => formRef.current?.submitForm()}>
                Enviar
            </ButtonComponent>
          </ContainerForgot>
        </Form>
      </Container>
    </SafeAreaView>
  )
}

export default ForgotPassword