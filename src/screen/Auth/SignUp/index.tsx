import 'react-native-gesture-handler'
import React, { useRef } from "react"
import { Form } from '@unform/mobile'
import * as yup from 'yup'
import { FormHandles } from '@unform/core'
import { TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import getValidationErrors from '../../../utils/getValidationErrors'
import { SafeAreaView, Container, ContainerSignIn } from './styles'
import Input from '../../../components/Input'
import ButtonComponent from '../../../components/Button'
import { cadastreUser } from '../../../services'
import LogoComponent from '../../../components/Logo'
import BackButton from './BackButton'
import { useAuth } from '../../../hooks/auth'

const SignUpComponent = () => {
  const { SignUp } = useAuth()
  const formRef = useRef<FormHandles>(null)
  const loginInputRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  const handleSignUp = async (data: any) => {
    try {
      const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("O email precisa ser valido").required("O email é obrigatório"),
        password: yup.string().required("Senha é obrigatório"),
        confirmPassword: yup.string().required("Confirmar senha é obrigatório"),
        birthday: yup.string().required("Data de nascimento é obrigátorio")
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await cadastreUser(data, { navigation, SignUp })
      Alert.alert('Conta criada', 'Você foi cadastrado com sucesso')

    } catch (err) {
      console.log('err', err)
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert('Falhas no cadastro', err.message)
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <LogoComponent />
        <Form ref={formRef} onSubmit={handleSignUp} >
          <Input autoCorrect={false} ref={loginInputRef} placeholder="Nome completo" name="name" icon="user" />
          <Input autoCapitalize="none" autoCorrect={false} ref={loginInputRef} placeholder="E-mail" name="email" icon="mail" />
          <Input secureTextEntry ref={passwordRef} placeholder="Senha" name="password" icon="key" />
          <Input secureTextEntry ref={passwordRef} placeholder="Confirmar senha" name="confirmPassword" icon="lock" />
          <Input ref={passwordRef} keyboardType="numeric" placeholder="Data de nascimento" name="birthday" icon="cake" />
          <ContainerSignIn>
            <BackButton onPress={() => navigation.goBack()}>Cancelar</BackButton>
            <ButtonComponent onPress={() => formRef.current?.submitForm()}>Criar Usuario</ButtonComponent>
          </ContainerSignIn>
        </Form>
      </Container>
    </SafeAreaView>
  )
}

export default SignUpComponent