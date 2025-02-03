import axios from "axios"
const API_URL = "http://localhost:8000/deals";

export async function createDeal(data) {
  try {
    const response = await axios.post(`${API_URL}/`, data);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Failed to create a deal");
  }
}

export async function fetchDeals() {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Failed getting deals");
  }
}

export async function fetchDealDetail(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response?.data
  } catch (error) {
    console.error(error);
    throw Error("Failed getting deal detail");
  }
}