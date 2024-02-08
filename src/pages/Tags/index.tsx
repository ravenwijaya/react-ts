import { Skeleton, useMediaQuery } from '@mui/material'
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
  Wrapper,
} from './styled.components'
import MasonryComponent from '../../components/MasonryGrid'

const renderTags = (item: Tag, width: number, height: number) => (
  <ItemContainer width={width} height={height}>
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
)

const Tags = () => {
  const isDesktop = useMediaQuery(deviceType.desktop)
  const { data: tagsResponse } = useFetchTagsQuery({})
  const titleVariant = isDesktop ? 'h5' : 'h4'

  return (
    <BaseContainer>
      <HeaderContainer>
        <Title variant={titleVariant}>Tags</Title>
      </HeaderContainer>
      <Wrapper>
        <ListContainer>
          <MasonryComponent<Tag>
            defaultHeight={199}
            defaultWidth={150}
            columnCount={isDesktop ? 5 : 2}
            ySpacer={24}
            xSpacer={36}
            items={tagsResponse ?? []}
            renderContent={renderTags}
            total={tagsResponse?.length}
          />
        </ListContainer>
      </Wrapper>
    </BaseContainer>
  )
}
export default Tags
