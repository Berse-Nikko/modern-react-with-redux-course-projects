import axios from "axios"

const rootUrl = "https://api.unsplash.com/search/photos"

const searchImages = async (query) => {
  const response = await axios.get(rootUrl, {
    headers: {
      Authorization: "Client-ID k4RVFODhWQSYEv9NtoFYb_wNUJkdRAxvYJbfWqcQt2E",
    },
    params: {
      query: query,
    },
  })

  return response.data.results
}

export default searchImages
