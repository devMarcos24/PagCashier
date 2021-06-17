import React from 'react'
import {ButtonText, Container, Icon} from './styles'
import {RectButtonProperties} from 'react-native-gesture-handler'

interface IButoonProps extends RectButtonProperties {

}

const ButtonGoogle:React.FC<IButoonProps> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <Icon name="google"/>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default ButtonGoogle