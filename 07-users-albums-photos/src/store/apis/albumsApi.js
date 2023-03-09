import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    //DEV FOR TESTING
    fetchFn: async (...args) => {
      await pause(500)
      return fetch(...args)
    },
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "Album", id: album.id }
          })
          tags.push({
            type: "UsersAlbums",
            id: user.id,
          })
          return tags
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          }
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }]
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          }
        },
      }),
      deleteAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }]
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          }
        },
      }),
    }
  },
})

//DEV FOR TESTING
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi
export { albumsApi }