import React, {useContext, createContext, useState, useEffect, useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContextData, AuthState } from './usecase/auth.usecase'

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider:  React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadStorageData() {
      const [token, user] = await AsyncStorage.multiGet(['@PagCashier:token', '@PagCashier:user'])
      if(user[1] && token[1]) {
        setData({
          token: token[1], user: JSON.parse(user[1])
        })
      }

      setIsLoading(false)
    }

    loadStorageData()
  },[])

  const signIn = useCallback(async (): Promise<any> => {

  },[])

  const signOut = useCallback((): void => {

  },[])

  return (
    <AuthContext.Provider value={{signIn, signOut, user: data.user, token: data.token, isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth():AuthContextData {
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
