import 'react-native-gesture-handler'
import React, { useRef } from "react"
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as yup from 'yup'
import { SafeAreaView, Container, ContainerLogin, ForgotButtonText, ForgotButton } from './styles'
import Input from '../../../components/Input'
import ButtonGoogle from './Buttons/ButtonGoogle'
import ButtonComponent from '../../../components/Button'
import {useAuth} from '../../../hooks/auth'
import CreateButton from './Buttons/CreateButton'
import LogoComponent from '../../../components/Logo'
import { Alert } from 'react-native'
import { SignInCredentials } from '../../../hooks/usecase/auth.usecase'

const Login = () => {
  const {signIn} = useAuth()
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  const handleLogin = async (data: SignInCredentials) => {
    try {
      const schema = yup.object({
        email: yup.string().email("O email precisa ser valido").required("O email é obrigatório"),
        password: yup.string().required("Senha é obrigatório")
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await signIn(data)

    } catch (error) {
      Alert.alert('Falhar ao fazer login', 'cheque suas credenciais e tente novamente')           
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <LogoComponent />
        <Form ref={formRef} onSubmit={handleLogin} >
          <Input autoCapitalize="none" autoCorrect={false} ref={loginInputRef} placeholder="E-mail" name="email" icon="mail" />
          <Input secureTextEntry ref={passwordRef} placeholder="Senha" name="password" icon="lock" />
          <ContainerLogin>
            <CreateButton onPress={() => navigation.navigate('SignUp')}>Criar Usuario</CreateButton>
            <ButtonComponent onPress={() => formRef.current?.submitForm()}>Entrar</ButtonComponent>
          </ContainerLogin>
        </Form>

        <ButtonGoogle>Login com o Google</ButtonGoogle>
        <ForgotButton>
          <ForgotButtonText onPress={() => navigation.navigate('ForgotPassword')}>Esqueci minha senha</ForgotButtonText>
        </ForgotButton>
      </Container>
    </SafeAreaView>
  )
}

export default Login