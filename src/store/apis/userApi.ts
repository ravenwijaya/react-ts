import { api } from './api'

interface User {
  id: string
  avater: string
  isFollowing: boolean
  name: string
  username: string
}

interface Response {
  page: number
  pageSize: number
  total: number
  totalPages: number
  data: User[]
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchFollowers: builder.query({
      query: ({ page, pageSize }) => {
        const queryParams = []
        if (page) queryParams.push(`page=${page}`)
        if (pageSize) queryParams.push(`pageSize=${pageSize}`)
        return `/users/all?${queryParams.join('&')}`
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}-${queryArgs.pageSize}`,
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.page !== previousArg?.page ||
        currentArg?.pageSize !== previousArg?.pageSize,
      merge: (currentCache, newItems) => {
        const merged = {
          data: [...currentCache.data, ...newItems.data],
          page: newItems.page,
          pageSize: newItems.page,
          total: newItems.total,
          totalPages: newItems.totalPages,
        }
        return merged
      },
      transformResponse: (response) => {
        const { page, pageSize, total, totalPages, data } = response as Response
        return {
          data,
          page,
          pageSize,
          total,
          totalPages,
        }
      },
    }),
    fetchFollowing: builder.query({
      query: ({ page, pageSize }) => {
        const queryParams = []
        if (page) queryParams.push(`page=${page}`)
        if (pageSize) queryParams.push(`pageSize=${pageSize}`)
        return `/users/friends?${queryParams.join('&')}`
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}-${queryArgs.pageSize}`,
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.page !== previousArg?.page ||
        currentArg?.pageSize !== previousArg?.pageSize,
      merge: (currentCache, newItems) => {
        const merged = {
          data: [...currentCache.data, ...newItems.data],
          page: newItems.page,
          pageSize: newItems.page,
          total: newItems.total,
          totalPages: newItems.totalPages,
        }
        return merged
      },
      transformResponse: (response) => {
        const { page, pageSize, total, totalPages, data } = response as Response
        return {
          data,
          page,
          pageSize,
          total,
          totalPages,
        }
      },
    }),
    fetchUsers: builder.query({
      query: ({ page, pageSize, keyword }) => {
        const queryParams = []
        if (page) queryParams.push(`page=${page}`)
        if (pageSize) queryParams.push(`pageSize=${pageSize}`)
        if (keyword) queryParams.push(`pageSize=${keyword}`)
        return `/users/all?${queryParams.join('&')}`
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}-${queryArgs.pageSize}-${queryArgs.keyword}`,
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.page !== previousArg?.page ||
        currentArg?.pageSize !== previousArg?.pageSize ||
        currentArg?.keyword !== previousArg?.keyword,
      merge: (currentCache, newItems) => {
        const merged = {
          data: [...currentCache.data, ...newItems.data],
          page: newItems.page,
          pageSize: newItems.page,
          total: newItems.total,
          totalPages: newItems.totalPages,
        }
        return merged
      },
      transformResponse: (response) => {
        const { page, pageSize, total, totalPages, data } = response as Response
        return {
          data,
          page,
          pageSize,
          total,
          totalPages,
        }
      },
    }),
  }),
})

export const {
  useFetchFollowersQuery,
  useFetchFollowingQuery,
  useFetchUsersQuery,
} = userApi
