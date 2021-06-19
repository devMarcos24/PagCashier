import React from 'react'
import { ContainerTitle, Icon, Logo, TitleText } from './styles'

const LogoComponent = () => {
  return (
    <ContainerTitle>
      <Logo>
        <Icon name="cash-register" />
      </Logo>
      <TitleText>PagCashier</TitleText>
    </ContainerTitle>
  )
}

export default LogoComponent