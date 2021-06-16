import {firebase} from '@react-native-firebase/auth'

export const signIn = (data: any) => {
  try {
    firebase.auth().sendPasswordResetEmail('marcostaylor18@gmail.com')
  } catch (error) {
    throw new Error(error.message)
  }
}