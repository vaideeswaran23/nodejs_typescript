import axios from "axios";
import { User } from "../types/User";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getAllUsers(): Promise<User[]> {
    const { data } = await axios.get<User[]>(`${BASE_URL}/users`);
    return data;
}

export async function getUserById(id: number): Promise<User> {
    const { data } = await axios.get<User>(`${BASE_URL}/users/${id}`);
    return data;
}
