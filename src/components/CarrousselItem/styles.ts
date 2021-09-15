import styled from 'styled-components/native'

interface IReceived {
  width: number;
}

export const ContainerList = styled.View`
  width: ${(props: IReceived) => props.width-30}px;
  height: 200px;
  border-width: 1px;
  border-color: #FFF;
  border-radius: 10px;
  margin-right: 10px;
`

export const Image = styled.Image`
  flex: 1;
  width: 98%;
  border-radius: 10px;
`