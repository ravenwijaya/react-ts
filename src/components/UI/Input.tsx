import styled from 'styled-components'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { useState } from 'react'
import { theme as customTheme } from '../../theme/theme'

const InputContainer = styled(Box)<{ borderColor: string }>`
  padding: 0px 18px;
  border-radius: 6px;
  height: 60px;
  border: 3px solid ${({ borderColor }) => borderColor};
`
const StyledInput = styled(InputBase)<{ textColor: string }>`
  width: 100%;
  height: 100%;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ textColor }) => textColor};
  line-height: 21px;
  letter-spacing: 0.25px;
  text-align: left;
`
interface InputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  placeholder: string
  textColor?: string
  borderColor?: string
}

function Input<T extends FieldValues>({
  name,
  control,
  placeholder,
  textColor = 'black',
  borderColor = 'black',
}: InputProps<T>) {
  const [focus, setFocus] = useState(false)

  const changeFocus = () => {
    setFocus((prev) => !prev)
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputContainer
          borderColor={focus ? customTheme.customColors.orange1 : borderColor}
        >
          <StyledInput
            onFocus={changeFocus}
            onBlur={changeFocus}
            error={!!error}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            textColor={textColor}
          />
        </InputContainer>
      )}
    />
  )
}
export default Input
