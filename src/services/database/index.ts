import firestore from '@react-native-firebase/firestore'
// const cashierDb = firestore().collection('cashier')
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

    delete data.password

    const id = new Date().getMilliseconds().toString() + new Date().getDay.toString()
    
    const userCreated = await userDb.doc().set(data)
  
    return 'created'
  } catch (err) {
    throw new Error(err.message)
  }
}