import axios from "axios"
const API_URL = "http://localhost:8000/users";

export async function createCustomer(data) {
  try {
    const response = await axios.post(`${API_URL}/`, data);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Failed to create the customer.");
  }
}

export async function getAllCustomers() {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Failed to get all customers.");
  }
}