import axios from "axios";
import { Post } from "../types/Post";
import { Comment } from "../types/Comment";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPosts(): Promise<Post[]> {
    const { data } = await axios.get<Post[]>(`${BASE_URL}/posts`);
    return data;
}

export async function getPostById(id: number): Promise<Post> {
    const { data } = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
    return data;
}

export async function getCommentsByPostId(postId: number): Promise<Comment[]> {
    const { data } = await axios.get<Comment[]>(`${BASE_URL}/posts/${postId}/comments`);
    return data;
}