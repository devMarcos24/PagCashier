import firestore from '@react-native-firebase/firestore'
// const cashierDb = firestore().collection('cashier')

interface user {
  name: string;
  email: string;
  password: string
}
const userDb = firestore().collection('user')

export const cadastreUser = async (data: any, userId: string) =>{
  try {
    const user = await userDb.where('email', '==', data.email).get()
    
    if(!user.empty) {
      throw new Error('user already cadastred')
    }

    delete data.password
    
    const userCreated = await userDb.doc().set(data)
  
    return 'created'
  } catch (err) {
    throw new Error(err.message)
  }
}

const getUserByEmail = async (email: string) => {
  const user = await userDb.where('email', '==', email).get()
}