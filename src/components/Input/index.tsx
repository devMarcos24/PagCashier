import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react'
import { useField } from '@unform/core'
import { Container, Icon, InputText } from './styles'
import { TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface inputValueReference {
  value: string
}

interface InputRef {
  focus(): void
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({ name, icon, ...rest }, ref) => {
  const inputElementRef = useRef<any>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue = '', error, registerField } = useField(name)

  const inputValueRef = useRef<inputValueReference>({ value: defaultValue })

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    }
  }))

  useEffect(() => {
    setIsFilled(!!inputValueRef.current.value)
  },[isFilled, inputValueRef.current.value])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = '',
          inputElementRef.current.clear()
      }
    })
  }, [fieldName, registerField])
  return (
    <Container isFocus={isFocused}>
      {!!icon && <Icon isFilled={isFilled} isFocus={isFocused} name={icon} size={20} />}
      <InputText
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value) => inputValueRef.current.value =value}
        keyboardAppearance="dark"
        placeholderTextColor="#66636088"
        {...rest}
      />
    </Container>
  )
}

export default forwardRef(Input);