import Skeleton from '@mui/material/Skeleton'
import { theme } from '../../../theme/theme'
import { User } from '../../../store/apis/userApi'
import {
  ContentContainer,
  FooterContainer,
  ImageContainer,
  ItemContainer,
  Name,
  Username,
} from './styled.components'

interface Props {
  item: User
  width: number
  height: number
}

const SearchUserItem = ({ item, width, height }: Props) => (
  <ItemContainer width={width} height={height}>
    <ContentContainer>
      <ImageContainer>
        {item ? (
          <img
            src={'https://picsum.photos/id/237/320/240'}
            style={{
              height: '100%',
              width: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ bgcolor: theme.customColors.white3 }}
          />
        )}
      </ImageContainer>
      <FooterContainer>
        {item ? (
          <>
            <Name>{item.name}</Name>
            <Username>by {item.username}</Username>
          </>
        ) : (
          <>
            <Skeleton
              variant="rectangular"
              width={120}
              sx={{ bgcolor: theme.customColors.white3 }}
            />
            <Skeleton
              variant="rectangular"
              width={50}
              sx={{ bgcolor: theme.customColors.white3 }}
            />
          </>
        )}
      </FooterContainer>
    </ContentContainer>
  </ItemContainer>
)

export default SearchUserItem
