import { Router, Request, Response } from "express";
import { getAllUsers, getUserById } from "../services/userService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch(error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const user = await getUserById(parseInt(req.params.id));
        res.json(user);
    } catch(error) {
        res.status(500).json({ message: "Error fetching user" });
    }
});

export default router;