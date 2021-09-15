import React from 'react'
import { Container, Modal, GetOut, GetOutText, InputMoney } from './styles'

const ModalAddRemove = ({setIsClose, isClose}: any) => {
  return (
    <Container>
      <GetOut onPress={() => setIsClose(!isClose)}>
        <GetOutText>X</GetOutText>
      </GetOut>
      <Modal>
        <InputMoney keyboardType="numeric">
        </InputMoney>
      </Modal>
    </Container>
  ) 
}

export default ModalAddRemove