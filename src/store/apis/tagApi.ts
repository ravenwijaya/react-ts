import { api } from './api'

export interface Tag {
  id: string
  name: string
  count: number
}

export const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchTags: builder.query({
      query: () => '/tags',
    }),
  }),
})

export const { useFetchTagsQuery } = tagApi
