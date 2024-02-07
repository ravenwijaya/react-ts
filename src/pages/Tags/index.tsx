import { CSSProperties } from 'react'
import { Box, Skeleton, useMediaQuery } from '@mui/material'
import { theme } from '../../theme/theme'
import { deviceType } from '../../utils/media'
import { Tag, useFetchTagsQuery } from '../../store/apis/tagApi'
import {
  BaseContainer,
  ContentContainer,
  CountText,
  HeaderContainer,
  ItemContainer,
  ItemLogo,
  ItemLogoContainer,
  ItemText,
  ListContainer,
  TagText,
  TextContainer,
  Title,
} from './styled.components'
import MasonryComponent from '../../components/MasonryGrid'

const SPACER = 24
const HEIGHT = 199 + 36 - SPACER

const renderTags = (item: Tag, style: CSSProperties) => (
  <Box style={style}>
    <ItemContainer height={HEIGHT}>
      <ContentContainer>
        {item ? (
          <ItemLogoContainer>
            <ItemLogo>
              <ItemText noWrap>{item?.name}</ItemText>
            </ItemLogo>
          </ItemLogoContainer>
        ) : (
          <Skeleton
            variant="rectangular"
            width={150}
            height={150}
            sx={{ bgcolor: theme.customColors.white3 }}
          />
        )}
        <TextContainer>
          {item ? (
            <>
              <TagText noWrap>{item?.name}</TagText>
              <CountText>{item?.count} Results</CountText>
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
        </TextContainer>
      </ContentContainer>
    </ItemContainer>
  </Box>
)

const Tags = () => {
  const isDesktop = useMediaQuery(deviceType.desktop)
  const { data: tagsResponse } = useFetchTagsQuery({})
  const titleVariant = isDesktop ? 'h5' : 'h4'
  const wrapperStyle = {
    padding: isDesktop ? '0px 257px' : '0px 26px 0px 25px',
  }
  return (
    <BaseContainer>
      <HeaderContainer>
        <Title variant={titleVariant}>Tags</Title>
      </HeaderContainer>
      <ListContainer>
        <MasonryComponent<Tag>
          defaultHeight={HEIGHT}
          defaultWidth={150}
          columnCount={isDesktop ? 5 : 2}
          spacer={SPACER}
          items={tagsResponse ?? []}
          renderContent={renderTags}
          wrapperStyle={wrapperStyle}
        />
      </ListContainer>
    </BaseContainer>
  )
}
export default Tags
