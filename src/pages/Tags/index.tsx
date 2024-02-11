import useMediaQuery from '@mui/material/useMediaQuery'
import TagItem from '../../components/Tags/TagItem'
import { deviceType } from '../../utils/media'
import { Tag, useFetchTagsQuery } from '../../store/apis/tagApi'
import {
  BaseContainer,
  HeaderContainer,
  ListContainer,
  Title,
  Wrapper,
} from './styled.components'
import MasonryComponent from '../../components/MasonryGrid'

const renderTags = (item: Tag, width: number, height: number) => (
  <TagItem item={item} width={width} height={height} />
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
            ySpacer={isDesktop ? 24 : 24}
            xSpacer={isDesktop ? 36 : 24}
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
