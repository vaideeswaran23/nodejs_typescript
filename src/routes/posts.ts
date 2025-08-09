import { Router } from "express";
import { getAllPosts, getPostById } from "../services/postService";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch(error) {
        res.status(500).json({ message: "Error fetching posts" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const post = await getPostById(parseInt(req.params.id));
        res.json(post);
    } catch(error) {
        res.status(500).json({ message: "Error fetching post" });
    }
});

export default router;