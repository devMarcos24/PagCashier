import styled, { css } from 'styled-components/native'
import IconProp from 'react-native-vector-icons/Entypo'

interface IProps {
  isFocus: boolean;
  isFilled?: boolean;
  isErrored: boolean;
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
  border-color: #232129;

  ${(props: IProps) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props: IProps) =>
    props.isFocus &&
    css`
      border-color: #ff9000;
    `}
  padding: 0 10px;
`

export const Icon = styled(IconProp)`
  font-size: 23px;
  color: #312e38;

  ${(props: IProps) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}
  ${(props: IProps) =>
    props.isFocus &&
    css`
      color: #ff9000;
    `}
`

export const InputText = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  color: #777360;
  font-size: 18px;
`
export const ContainerError = styled.View`
`;

export const TextError = styled.Text`
  margin-top: -16px;
  margin-bottom: 10px;
  color: #c53030;
`