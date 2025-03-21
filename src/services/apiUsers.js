import axios from "axios"
const API_URL = "http://localhost:8000/users";

export async function createUser(data) {
  try {
    const response = await axios.post(`${API_URL}/users/`, data);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Failed to create the Authenticate.");
  }
}