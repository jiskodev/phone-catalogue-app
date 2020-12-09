import axios from 'axios'

const url = 'http://localhost:4000/phones'

export const fetchPhones = () => axios.get(url)
export const addPhone = (newPhone) => axios.post(url, newPhone)
export const updatePhone = (id, updatedPhone) => axios.put(`${url}/${id}`, updatedPhone)
export const deletePhone = (id) => axios.delete(`${url}/${id}`)