import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { CSSProperties } from 'react'
import { User } from '../../../store/apis/userApi'
import Button from '../../UI/Button'
import { BUTTON_VARIANTS } from '../../../constants/core'
import {
  LeftContent,
  MiddleContent,
  Name,
  RightContent,
  StyledAvatar,
  UserContainer,
  Username,
} from './styled.components'
import { theme } from '../../../theme/theme'

interface Props {
  item: User
  style: CSSProperties
  key: string
}

const UserItem = ({ item, style, key }: Props) => (
  <Box key={key} style={style}>
    <UserContainer>
      <LeftContent>
        {item ? (
          <StyledAvatar alt={item.name} src={item.avater} />
        ) : (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: theme.customColors.white3 }}
          />
        )}
      </LeftContent>
      <MiddleContent>
        {item ? (
          <>
            <Name noWrap variant="body1">
              {item.name}
            </Name>
            <Username noWrap variant="body2">
              @{item.username}
            </Username>
          </>
        ) : (
          <>
            <Skeleton
              variant="rectangular"
              width={79}
              sx={{ bgcolor: theme.customColors.white3 }}
            />
            <Skeleton
              variant="rectangular"
              width={70}
              sx={{ bgcolor: theme.customColors.white3 }}
            />
          </>
        )}
      </MiddleContent>
      <RightContent>
        {item ? (
          <Button
            onClick={() => {}}
            variant={
              item.isFollowing
                ? BUTTON_VARIANTS.CONTAINED
                : BUTTON_VARIANTS.OUTLINED
            }
          >
            {item.isFollowing ? 'Following' : 'Follow'}
          </Button>
        ) : (
          <Skeleton
            variant="rectangular"
            width={60}
            height={29}
            sx={{ bgcolor: theme.customColors.white3 }}
          />
        )}
      </RightContent>
    </UserContainer>
  </Box>
)
export default UserItem
