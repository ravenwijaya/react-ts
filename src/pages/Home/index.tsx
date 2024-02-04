import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { Button } from '@mui/material'
import InputSlider from '../../components/UI/InputSlider'
import { theme } from '../../theme/theme'
import Input from '../../components/UI/Input'
import {
  BaseContainer,
  LimitContainer,
  ListContainer,
  SearchContainer,
  SettingContainer,
  Title,
} from './styled.components'
import { Hidden } from '../../components/UI/Hidden'

interface FormInput {
  search: string
}
const Home = () => {
  const { handleSubmit, control } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const inputValues = data as FormInput
    console.log(inputValues)
  }

  return (
    <BaseContainer>
      <SettingContainer>
        <SearchContainer>
          <Title variant="h5">Search</Title>
          <Input
            name="search"
            placeholder="keyword"
            control={control}
            borderColor={theme.customColors.white2}
            textColor={theme.customColors.white1}
          />
        </SearchContainer>
        <LimitContainer>
          <Title variant="h5"># Of Results Per Page</Title>
          <InputSlider />
        </LimitContainer>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Submit
        </Button>
      </SettingContainer>
      <Hidden only={['xsmall', 'small', 'medium', 'large']}>
        <ListContainer></ListContainer>
      </Hidden>
    </BaseContainer>
  )
}

export default Home
