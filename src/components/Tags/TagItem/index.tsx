import Skeleton from '@mui/material/Skeleton'
import { theme } from '../../../theme/theme'
import { Tag } from '../../../store/apis/tagApi'
import {
  ContentContainer,
  CountText,
  ItemContainer,
  ItemLogo,
  ItemLogoContainer,
  ItemText,
  TagText,
  TextContainer,
} from './styled.components'

interface Props {
  item: Tag
  width: number
  height: number
}

const TagItem = ({ item, width, height }: Props) => (
  <ItemContainer width={width} height={height}>
    <ContentContainer>
      {item ? (
        <>
          <ItemLogoContainer>
            <ItemLogo>
              <ItemText noWrap>{item.name}</ItemText>
            </ItemLogo>
          </ItemLogoContainer>
          <TextContainer>
            <TagText noWrap>{item.name}</TagText>
            <CountText>{item.count} Questions</CountText>
          </TextContainer>
        </>
      ) : (
        <>
          <Skeleton
            variant="rectangular"
            width={150}
            height={150}
            sx={{ bgcolor: theme.customColors.white3 }}
          />
          <TextContainer>
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
          </TextContainer>
        </>
      )}
    </ContentContainer>
  </ItemContainer>
)

export default TagItem
