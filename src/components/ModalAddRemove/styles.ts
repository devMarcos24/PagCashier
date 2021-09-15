import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #00000099;
`

export const Modal = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: #FFF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

export const GetOut = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  right: 10px;
  background: #FFF;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`
export const GetOutText = styled.Text`
  font-size: 15px;
  color: #000;
`
export const InputMoney = styled.TextInput`
  width: 98%;
  height: 60px;
  border: 2px;
  margin-top: 50px;
  align-self: center;
  font-size: 30px;
  padding: 10px;
`