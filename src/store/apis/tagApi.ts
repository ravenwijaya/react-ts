import { api } from './api'

export interface User {
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
