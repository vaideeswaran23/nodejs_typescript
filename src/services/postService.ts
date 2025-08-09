import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPosts() {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
}

export async function getPostById(id: number) {
    const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
    return data;
}