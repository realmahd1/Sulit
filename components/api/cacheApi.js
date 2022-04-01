import axios from "axios";
import cachios from "cachios";

/**
 * create Instance for cached data
 */
const axiosInstance = axios.create({
	baseURL: process.env.URL
})

export const cachiosInstance = cachios.create(axiosInstance);