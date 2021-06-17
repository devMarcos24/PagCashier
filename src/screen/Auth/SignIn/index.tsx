import 'react-native-gesture-handler'
import React, { useRef } from "react"
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import {TextInput} from 'react-native'
import {SafeAreaView, Container } from './styles'
import Input from '../../../components/Input'
import ButtonComponent from '../../../components/Button'
import {cadastreUser} from '../../../services'

const SignIn = () => {
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)

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
        </Container>
      </SafeAreaView>
  )
}

export default SignIn