import { Button as BaseButton } from '@mui/base/Button'
import styled, { CSSObject } from 'styled-components'
import { ReactElement } from 'react'
import media from '../../utils/media'
import { BUTTON_VARIANTS } from '../../constants/core'

interface ButtonProps {
  onClick: () => void
  children: ReactElement | string
  variant: string
  style?: CSSObject
}

const NormalButton = styled(BaseButton)(
  ({ theme }) => `
    width: 343px;
    height: 40px;
    padding: 13px 16px 13px 16px;
    border-radius: 4px;
    background-color: ${theme.customColors.white1};
    border:none;
    
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
    ${media.xlarge`
        width: 343px
    `}
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

const Button = ({ onClick, children, variant, style }: ButtonProps) => {
  if (variant === BUTTON_VARIANTS.CONTAINED) {
    return (
      <ContainedButton onClick={onClick} style={style}>
        {children}
      </ContainedButton>
    )
  }
  if (variant === BUTTON_VARIANTS.OUTLINED) {
    return (
      <OutlinedButton onClick={onClick} style={style}>
        {children}
      </OutlinedButton>
    )
  }
  return (
    <NormalButton onClick={onClick} style={style}>
      {children}
    </NormalButton>
  )
}
export default Button
