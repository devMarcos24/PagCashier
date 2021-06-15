import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import {Button, Text} from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
}

const ButtonComponent: React.FC<ButtonProps> = ({children, ...rest}) => {
  return(
    <Button {...rest}>
      <Text>{children}</Text>
    </Button>
  )
}

export default ButtonComponent