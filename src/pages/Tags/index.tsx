import { CSSProperties } from 'react'
import { Box } from '@mui/material'
import { deviceType } from '../../utils/media'
import { User, useFetchTagsQuery } from '../../store/apis/tagApi'
import {
  BaseContainer,
  ContentContainer,
  CountText,
  ItemContainer,
  ItemLogo,
  ItemLogoContainer,
  ItemText,
  ListContainer,
  TagText,
  TextContainer,
  Title,
} from './styled.components'
import MasonryComponent from '../../components/List/grid'

const spacer = 24
const height = 199 + 36 - spacer

const renderTags = (item: User, style: CSSProperties) => (
  <Box style={style} id="boxxxx">
    <ItemContainer height={height}>
      <ContentContainer>
        <ItemLogoContainer>
          <ItemLogo>
            <ItemText noWrap>{item.name}</ItemText>
          </ItemLogo>
        </ItemLogoContainer>
        <TextContainer>
          <TagText noWrap>{item.name}</TagText>
          <CountText>{item.count} Results</CountText>
        </TextContainer>
      </ContentContainer>
    </ItemContainer>
  </Box>
)

const Tags = () => {
  const { data: tagsResponse } = useFetchTagsQuery({})
  const isMobile = !deviceType.giant()

  return (
    <BaseContainer>
      <Title variant={deviceType.giant() ? 'h4' : 'h5'}>Tags</Title>
      <ListContainer>
        <MasonryComponent<User>
          defaultHeight={height}
          defaultWidth={150}
          columnCount={isMobile ? 2 : 5}
          spacer={24}
          items={tagsResponse ?? []}
          renderContent={renderTags}
        />
      </ListContainer>
    </BaseContainer>
  )
}
export default Tags
