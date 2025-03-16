import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => axios.get(API_URL);
export const createTask = async (task) => axios.post(API_URL, task);
export const updateTask = async (id, updatedTask) =>
  axios.put(`${API_URL}/${id}`, updatedTask);
export const deleteTask = async (id) => axios.delete(`${API_URL}/${id}`);
