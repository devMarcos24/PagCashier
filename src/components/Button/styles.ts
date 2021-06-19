import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'

export const Button = styled(RectButton)`
  min-width: 49%;
  height: 60px;
  background: #ff9000;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: #000;
  font-size: 23px;
  font-family: 'Roboto-Bold';
`