import styled from 'styled-components/native'
import IconProp from 'react-native-vector-icons/Entypo'

interface IProps {
  isFocus: boolean;
  isFilled?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #232129;
  border-radius: 8px;
  margin-bottom: 20px;
  border-width: 1.5px;
  border-color: ${(props: IProps) => props.isFocus ? '#ff9000' : '#232129' };
  padding: 0 10px;
`

export const Icon = styled(IconProp)`
  font-size: 23px;
  color: #312e38;

  color: ${(props: IProps) => props.isFocus || props.isFilled ? '#ff900099' : '#312e38' };
`

export const InputText = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  color: #777360;
  font-size: 18px;
`