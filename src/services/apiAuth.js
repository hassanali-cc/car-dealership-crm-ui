import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL;

export async function authenticateUser(data) {
  try {
    const response = await axios.post(`${API_URL}/users/login`, data);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Incorrect email or password.");
  }
}