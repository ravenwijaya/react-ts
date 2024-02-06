import { Button as BaseButton } from '@mui/base/Button'
import styled from 'styled-components'
import { BUTTON_VARIANTS } from '../../constants/core'

interface ButtonProps {
  onClick: () => void
  text: string
  variant: string
}

const NormalButton = styled(BaseButton)(
  ({ theme }) => `
    width: 335px;
    height: 40px;
    padding: 13px 16px 13px 16px;
    border-radius: 4px;
    background-color: ${theme.customColors.white1};
    border-radius:4px;

    font-family: Ubuntu;
    font-size: 14px;
    font-weight: ${theme.fontWeight.bold};
    line-height: 14px;
    letter-spacing: 0px;
    text-align: center;
    color:${theme.customColors.black1};


    transition: all 150ms ease;
    cursor: pointer;
    &:hover {
    color:${theme.customColors.white1};
      background-color: ${theme.customColors.black1};
      border:1px solid ${theme.customColors.white1};
    }
    &.base--disabled {
      background-color: grey;
      color: grey;
    }
  `,
)

const OutlinedButton = styled(BaseButton)(
  ({ theme }) => `
  width: 60px;
  height: 29px;
  padding: 8px 10px 8px 10px;
  border-radius: 20px;
  gap: 10px;
  background-color: ${theme.customColors.black1};
  border:1px solid ${theme.customColors.white1};

  font-family: Open Sans;
  font-size: 12px;
  font-weight: ${theme.fontWeight.semiBold};
  line-height: 12px;
  letter-spacing: 0px;
  text-align: center;
  color:${theme.customColors.white1};

  transition: all 150ms ease;
  cursor: pointer;
  &:hover {
      color:${theme.customColors.black1};
      background-color: ${theme.customColors.white1};
  }
  &.base--disabled {
      background-color: grey;
      color: grey;
  }
        
    `,
)

const ContainedButton = styled(BaseButton)(
  ({ theme }) => `
    width: 76px;
    height:28px;
    padding: 8px 10px 8px 10px;
    border-radius: 20px;
    gap: 10px;
    background-color: ${theme.customColors.white1};
    border:1px solid ${theme.customColors.white1};


    font-family: Open Sans;
    font-size: 12px;
    font-weight: ${theme.fontWeight.semiBold};
    line-height: 12px;
    letter-spacing: 0px;
    text-align: center;
    color:${theme.customColors.black1};

    transition: all 150ms ease;
    cursor: pointer;
    &:hover {
        color:${theme.customColors.white1};
        background-color: ${theme.customColors.black1};
    }
    &.base--disabled {
        background-color: grey;
        color: grey;
    }
      `,
)

const Button = ({ onClick, text, variant }: ButtonProps) => {
  if (variant === BUTTON_VARIANTS.CONTAINED) {
    return <ContainedButton onClick={onClick}>{text}</ContainedButton>
  }
  if (variant === BUTTON_VARIANTS.OUTLINED) {
    return <OutlinedButton onClick={onClick}>{text}</OutlinedButton>
  }
  return <NormalButton onClick={onClick}>{text}</NormalButton>
}
export default Button
