import React from 'react'
import {AuthProvider} from './auth'

const AppProvider = ({children}: any) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider