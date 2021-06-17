import 'react-native-gesture-handler'
import React, { useRef } from "react"
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import {TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView, Container, ContainerLogin, ForgotButtonText, ForgotButton} from './styles'
import Input from '../../../components/Input'
import ButtonGoogle from './Buttons/ButtonGoogle'
import ButtonComponent from '../../../components/Button'
import {cadastreUser} from '../../../services'
import CreateButton from './Buttons/CreateButton'

const Login = () => {
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  const handleLogin = async (data: any) => {
    try {
      const {email, password} = data
      await cadastreUser(data, '1')

    } catch (error) {
      console.log(error)
    }
  }

  return (
      <SafeAreaView>
        <Container>
          <Form ref={formRef} onSubmit={handleLogin} >
          <Input autoCapitalize="none" autoCorrect={false} ref={loginInputRef} placeholder="E-mail" name="email" icon="mail"/>
          <Input secureTextEntry ref={passwordRef} placeholder="Senha" name="password" icon="lock"/>
          <ButtonComponent onPress={() => formRef.current?.submitForm()}>Entrar</ButtonComponent>
          </Form>

          <ContainerLogin>
            <ButtonGoogle>Login</ButtonGoogle>
            <CreateButton onPress={() => navigation.navigate('SignIn')}>Criar Usuario</CreateButton>
          </ContainerLogin>
          <ForgotButton>
            <ForgotButtonText onPress={() => navigation.navigate('ForgotPassword')}>Esqueci minha senha</ForgotButtonText>
          </ForgotButton>
        </Container>
      </SafeAreaView>
  )
}

export default Login