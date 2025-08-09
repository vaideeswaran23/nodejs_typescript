import { Router, Request, Response } from "express";
import { getAllPosts, getPostById, getCommentsByPostId} from "../services/postService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch(error) {
        res.status(500).json({ message: "Error fetching posts" });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const post = await getPostById(parseInt(req.params.id));
        res.json(post);
    } catch(error) {
        res.status(500).json({ message: "Error fetching post" });
    }
});

router.get("/:id/comments", async (req: Request, res: Response) => {
    try {
        const comments = await getCommentsByPostId(parseInt(req.params.id));
        res.json(comments);
    } catch(error) {
        res.status(500).json({ message: "Error fetching comments" });
    }
});

export default router;