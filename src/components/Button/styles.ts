import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'

export const Button = styled(RectButton)`
  min-width: 100%;
  height: 55px;
  background: #ff9000;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-weight: bold;
`