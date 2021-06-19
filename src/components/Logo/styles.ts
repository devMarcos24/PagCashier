import styled from 'styled-components/native'
import IconVector from 'react-native-vector-icons/MaterialCommunityIcons'

export const ContainerTitle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 35px;
`

export const Logo = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #ff9000;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
`

export const Icon = styled(IconVector)`
  font-size: 40px;
  color: #000;
`

export const TitleText = styled.Text`
  font-size: 35px;
  font-family: 'Poppins-Bold';
  color: #FFF;
`