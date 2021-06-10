import React from "react"
import Auth from "./Auth.router"
import App from "./App.router"


const Router = () => {
  const user = false;
  return user ? <App/> : <Auth/> 
}

export default Router