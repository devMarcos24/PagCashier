import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import IconVector from 'react-native-vector-icons/Ionicons'

export const  Container = styled(RectButton)`
  display: flex;
  width: 49%;
  height: 60px;
  background: #B8B7C2;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 4%;
  border-radius: 10px;
`

export const Icon = styled(IconVector)`
  font-size: 30px;
  color: #000;
`

export const ButtonText = styled.Text`
  color: #000;
  font-size: 23px;
  font-family: 'Roboto-Bold';
`

