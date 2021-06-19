import React, { useContext, createContext, useState, useEffect, useCallback } from 'react'
import firebase from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContextData, AuthState, SignInCredentials } from './usecase/auth.usecase'

const auth = firebase()
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadStorageData() {
      const [token, user] = await AsyncStorage.multiGet(['@PagCashier:token', '@PagCashier:user'])
      if (user[1]) {
        setData({
          ...data, user: JSON.parse(user[1])
        })
      }

      setIsLoading(false)
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }: SignInCredentials): Promise<any> => {
    const user = await auth.signInWithEmailAndPassword(email, password)
    console.log(user)
    await AsyncStorage.setItem('@PagCashier:user', JSON.stringify(user))
    setData({ ...data, user })
  }, [data])

  const signOut = useCallback(async (): Promise<void> => {
    await AsyncStorage.removeItem('@PagCashier:user')

    setData({} as AuthState)
  }, [data])

  const forgotPassword = useCallback(async (email: string) => {
    await auth.sendPasswordResetEmail(email)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, token: data.token, isLoading, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
