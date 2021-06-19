import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import IconVector from 'react-native-vector-icons/Ionicons'

export const  Container = styled(RectButton)`
  display: flex;
  width: 48.5%;
  height: 60px;
  background: #B8B7C2;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  border-radius: 10px;
`

export const Icon = styled(IconVector)`
  font-size: 24px;
  color: #000;
`

export const ButtonText = styled.Text`
  color: #000;
  font-size: 19px;
  font-family: 'Roboto-Bold';
`

