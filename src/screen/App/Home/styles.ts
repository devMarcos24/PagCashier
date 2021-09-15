import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
`

export const HeadContainer = styled.View`
  height: 50%;
  background: #ff9000;
`

export const ImageSettings = styled.Image`
  max-width: 55px;
  max-height: 55px;
  border-radius: 27.5px;
`

export const HeadContainerTitle = styled.Text`
  font-size: 18px;
  padding: 3%;
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

export const Menu = styled.View`
  width: ${width}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 60px;
`

export const MenuItem = styled.TouchableOpacity`
  width: 32%;
  height: 100px;
  background: white;
  border-radius: 20px;
  margin-top: -65px;

  align-items: center;
  justify-content: center;
`
