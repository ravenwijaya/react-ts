import { User, useFetchTagsQuery } from '../../store/apis/tagApi'
import {
  BaseContainer,
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

const renderTags = (tags: User[]) => (
  <>
    {tags?.map((item: User) => (
      <ItemContainer>
        <ItemLogoContainer>
          <ItemLogo>
            <ItemText noWrap>{item.name}</ItemText>
          </ItemLogo>
        </ItemLogoContainer>
        <TextContainer>
          <TagText noWrap>{item.name}</TagText>
          <CountText>{item.count} Results</CountText>
        </TextContainer>
      </ItemContainer>
    ))}
  </>
)
const Tags = () => {
  const { data: tagsResponse } = useFetchTagsQuery({})
  return (
    <BaseContainer>
      <Title>Tags</Title>
      <ListContainer>{renderTags(tagsResponse)}</ListContainer>
    </BaseContainer>
  )
}
export default Tags
