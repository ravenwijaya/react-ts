import Slider from '@mui/material/Slider'
import styled from 'styled-components'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import media from '../../utils/media'

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
const StyledSlider = styled(Slider)(
  ({ theme }) => `
    height: 8px;
    padding: 0;
    
    & .MuiSlider-track {
      border: none;
      background: linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%);
    }
    
    & .MuiSlider-thumb {
      height: 26px;
      width: 26px;
      border: 6px solid ${theme.customColors.yellow1};
      background-color: ${theme.customColors.grey1};
    }
    
    & .MuiSlider-rail {
      background-color: ${theme.customColors.white4};
    }
    
    & .MuiSlider-markLabel {
      font-family: Ubuntu;
      font-size: 14px;
      font-weight: ${theme.fontWeight.regular};
      line-height: 21px;
      letter-spacing: 0.25px;
      text-align: left;
      color: ${theme.customColors.white1};
      top: 22px;
    }
    
    & .MuiSlider-mark {
      display: none;
    }
    ${media.xlarge`
      font-weight: ${theme.fontWeight.medium};
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.15px;
    `}
  `,
)

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
