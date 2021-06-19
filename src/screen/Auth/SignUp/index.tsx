import 'react-native-gesture-handler'
import React, { useRef } from "react"
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import {TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView, Container, ContainerSignIn } from './styles'
import Input from '../../../components/Input'
import ButtonComponent from '../../../components/Button'
import {cadastreUser} from '../../../services'
import BackButton from './BackButton'
import LogoComponent from '../../../components/Logo'
import { Alert } from 'react-native'

const SignIn = () => {
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  const handleLogin = async (data: any) => {
    try {
      console.log(data)
      await cadastreUser(data)

    } catch (error) {
      Alert.alert('Falhas no Login', error.message)
      console.log(error)
    }
  }

  return (
      <SafeAreaView>
        <Container>
        <LogoComponent/>
          <Form ref={formRef} onSubmit={handleLogin} >
            <Input autoCorrect={false} ref={loginInputRef} placeholder="Nome completo" name="name" icon="user"/>
            <Input autoCapitalize="none" autoCorrect={false} ref={loginInputRef} placeholder="E-mail" name="email" icon="mail"/>
            <Input secureTextEntry ref={passwordRef} placeholder="Senha" name="password" icon="key"/>
            <Input secureTextEntry ref={passwordRef} placeholder="Confirmar senha" name="confirm_password" icon="lock"/>
            <Input ref={passwordRef} keyboardType="numeric" placeholder="Data de nascimento" name="birthday" icon="cake"/>
            <ContainerSignIn>
              <BackButton onPress={() => navigation.goBack()}>Cancelar</BackButton>
              <ButtonComponent onPress={() => formRef.current?.submitForm()}>Criar Usuario</ButtonComponent>
            </ContainerSignIn>
          </Form>
        </Container>
      </SafeAreaView>
  )
}

export default SignIn