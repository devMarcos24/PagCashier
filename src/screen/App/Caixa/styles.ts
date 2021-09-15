import styled from 'styled-components/native'
import IconFather from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
`

export const HeadContainer = styled.View`
  background: #ff9000;
  align-items: center;
  justify-content: center;
`

export const ImageSettings = styled.Image`
  max-width: 55px;
  max-height: 55px;
  border-radius: 27.5px;
`

export const HeadContainerTitle = styled.Text`
  font-size: 35px;
  align-self: center;
  padding: 3%;
  color: #FFF;
  font-family: 'Roboto-Bold';
`

export const HeadContainerPicture = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  background: #FFF;
  border-radius: 27px;
  margin-right: 5px;
`

export const SafeAreaView = styled.SafeAreaView`
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
`
export const ButtonAdd = styled.TouchableOpacity`
  width: 49%;
  height: 70px;
  background: #FFF;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 10px;
`

export const ButtonAddText = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Bold';
`
export const ListPayment = styled.View`
  width: 100%;
  padding: 10px;
  background: #FFF;
`

export const ListPaymentItem = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  margin-bottom: 10px;
`

export const TextValue = styled.Text`
  font-size: 25px;
  margin-left: 10px;
`

export const IconComponent = styled(IconFather)`
  font-size: 30px;
`