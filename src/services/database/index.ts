import { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

// const cashierDb = firestore().collection('cashier')

interface ICadastreUser {
  name: string;
  email: string;
  password: string | undefined;
  
}

const userDb = firestore().collection('user')

export const cadastreUser = async (data: ICadastreUser) =>{
  try {
    const user = await userDb.where('email', '==', data.email).get()
    
    if(!user.empty) {
      throw new Error('Usuario já cadastrado')
    }

    delete data.password
    
    const userCreated = await userDb.doc().set(data)
  
    return 'created'
  } catch (err) {
    throw new Error(err.message)
  }
}