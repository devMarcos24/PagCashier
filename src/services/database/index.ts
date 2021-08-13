import firestore from '@react-native-firebase/firestore'
import { NavigationContainerProps } from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'

interface ICadastreUser {
  uid?: string;
  name: string;
  email: string;
  password: string | undefined;
  confirmPassword: string | undefined;
}

const userDb = firestore().collection('user')

export const cadastreUser = async (data: ICadastreUser, hooks: any) => {
  try {

    const uid = await hooks.SignUp({ email: data.email, password: data.password })
    data.uid = uid;

    delete data.password
    delete data.confirmPassword
    await userDb.doc().set(data)
    // await userDb.doc(uid).set(data)
    hooks.navigation.goBack()
    return 'created'
  } catch (err) {
    if(err.message.includes('email-already-in-use')){
      hooks.navigation.navigate('ForgotPassword')
      throw new Error('Email já cadastrado, por favor solicite a recuperação de senha')
    }

    throw new Error('Falha ao fazer seu cadastro tente novamente ou entre em contato com o suporte')
  }
}