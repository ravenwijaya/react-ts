import styled from 'styled-components'
import Box from '@mui/material/Box'
import { ICON_NAMES } from '../../constants/core'
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'
import { ReactComponent as Union } from '../../assets/svgs/union.svg'

const ICONS = {
  [ICON_NAMES.LOGO]: Logo,
  [ICON_NAMES.UNION]: Union,
}

type IconValue = (typeof ICON_NAMES)[keyof typeof ICON_NAMES]

interface IconProps {
  name: IconValue
  width?: number
  height?: number
  color?: string
}

const StyledIcon = styled(Box)<IconProps>`
  svg {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    fill: ${({ color }) => color}; /* Change the fill color dynamically */
  }
`

const Icon = ({
  name,
  width = 35,
  height = 15,
  color = 'white',
}: IconProps) => {
  const Component = ICONS[name]
  return (
    <StyledIcon as={Component} width={width} height={height} color={color} />
  )
}

export default Icon
