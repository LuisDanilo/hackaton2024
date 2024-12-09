import axios from "axios"

export const apiClient = axios.create({
  baseURL: process.env.API_URL,
})

export async function getTest() {
  try {
    const token = localStorage.getItem("auth_token")
    const response = await apiClient.get("/test", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}
