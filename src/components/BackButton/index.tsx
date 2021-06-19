import React from 'react'
import {ButtonText, Container, Icon} from './styles'
import {RectButtonProperties} from 'react-native-gesture-handler'

interface IButoonProps extends RectButtonProperties {

}

const BackButton:React.FC<IButoonProps> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default BackButton