import firestore from '@react-native-firebase/firestore'
// import bcrypt from 'bcryptjs'
const cashierDb = firestore().collection('cashier')
const userDb = firestore().collection('user')

export const create = () =>{
  return 'created'
}

export const cadastreUser = async (data: any, userId: string) =>{
  try {
    const user = await userDb.where('email', '==', data.email).get()
    
    if(!user.empty) {
      throw new Error('user already cadastred')
    }

    const userCreated = await userDb.doc(userId).set(data)
  
    return 'created'
  } catch (err) {
    throw new Error(err.message)
  }
}