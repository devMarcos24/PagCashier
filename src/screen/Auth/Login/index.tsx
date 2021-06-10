import 'react-native-gesture-handler'
import React, { useRef } from "react"
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import {Button, TextInput} from 'react-native'
import {SafeAreaView, Container } from './styles'
import Input from '../../../components/Input'

const App = () => {
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  return (
      <SafeAreaView>
        <Container>
          <Form ref={formRef} onSubmit={(data) => {console.log(data)}} >
          <Input autoCapitalize="none" autoCorrect={false} ref={loginInputRef} placeholder="E-mail" name="email" icon="mail"/>
          <Input secureTextEntry ref={passwordRef} placeholder="Senha" name="password" icon="lock"/>
          <Button title="Enviar" onPress={() => formRef.current?.submitForm()}/>
          </Form>
        </Container>
      </SafeAreaView>
  )
}

export default App