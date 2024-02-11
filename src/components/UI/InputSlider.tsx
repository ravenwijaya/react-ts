import Slider from '@mui/material/Slider'
import styled from 'styled-components'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { theme } from '../../theme/theme'

const defaultMarks = [
  {
    value: 3,
    realValue: 3,
    label: '3',
  },
  {
    value: 12,
    realValue: 6,
    label: '6',
  },
  {
    value: 21,
    realValue: 9,
    label: '9',
  },
  {
    value: 30,
    realValue: 12,
    label: '12',
  },
  {
    value: 39,
    realValue: 15,
    label: '15',
  },
  {
    value: 50,
    realValue: 50,
    label: '50',
  },
]
interface Mark {
  value: number
  realValue: number
  label: string
}

interface InputProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  max?: number
  min?: number
  marks?: Mark[]
}

const StyledSlider = styled(Slider)({
  height: 8,
  padding: 0,
  '& .MuiSlider-track': {
    border: 'none',
    background: `linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)`,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    border: `6px solid ${theme.customColors.yellow1}`,
    backgroundColor: theme.customColors.grey1,
  },
  '& .MuiSlider-rail': {
    backgroundColor: theme.customColors.white4,
  },
  '& .MuiSlider-markLabel': {
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontWeight: theme.fontWeight.medium,
    lineHeight: '24px',
    letterSpacing: '0.15000000596046448px',
    textAlign: 'left',
    color: theme.customColors.white1,
    top: 37,
  },
  '& .MuiSlider-mark': {
    display: 'none',
  },
})

function InputSlider<T extends FieldValues>({
  name,
  control,
  max = 50,
  min = 3,
  marks = defaultMarks,
}: InputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        const realValue = marks.find((item) => item.realValue === value)?.value
        return (
          <StyledSlider
            aria-label="Custom marks"
            defaultValue={realValue}
            step={null}
            max={max}
            min={min}
            onChange={(event: Event, newValue: number | number[]) => {
              if (typeof newValue === 'number') {
                const mark = marks.find(
                  (item) => item.value === newValue,
                ) as Mark
                onChange(mark.realValue)
              }
            }}
            marks={marks}
            value={realValue}
          />
        )
      }}
    />
  )
}

export default InputSlider
