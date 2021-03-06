import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import IconVector from 'react-native-vector-icons/AntDesign'

export const Container = styled(RectButton)`
  display: flex;
  width: 100%;
  height: 60px;
  background: #19146F;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  margin-top: 20px;
`

export const Icon = styled(IconVector)`
  font-size: 22px;
  color: #FFF;
`

export const ButtonText = styled.Text`
  margin-left: 10px;
  color: #FFF;
  font-size: 20px;
  font-family: 'Roboto-Bold';
`

