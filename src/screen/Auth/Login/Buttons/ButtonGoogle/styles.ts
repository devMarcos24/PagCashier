import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import IconVector from 'react-native-vector-icons/AntDesign'

export const  Container = styled(RectButton)`
  display: flex;
  width: 49%;
  height: 60px;
  background: #19146F;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 13%;
  border-radius: 10px;
`

export const Icon = styled(IconVector)`
  font-size: 22px;
  color: #FFF;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 19px;
  font-family: 'Roboto-Bold';
`

