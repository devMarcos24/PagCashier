import React from "react"
import {useAuth} from '../hooks/auth'
import Auth from "./Auth.router"
import App from "./App.router"
import {Container, Loading} from './styles'
import Logo from "../components/Logo"


const Router = () => {
  const {user, isLoading} = useAuth()
  if(isLoading) {
    return (
      <Container>
        <Logo/>
        <Loading size="large" color="#FFF" />
      </Container>
    )
  }
  
  return user ? <App/> : <Auth/> 
}

export default Router