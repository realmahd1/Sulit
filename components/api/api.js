import axios from "axios"

export const getAxiosInstanceApi = () => {
	return axios.create({
		baseURL: process.env.URL,
		headers: {
			"x-auth-token": localStorage.getItem('x-auth-token')
		}
	})
}
export const getAxiosInstanceApiWithOutToken = () => {
	return axios.create({
		baseURL: process.env.URL,
	})
}
