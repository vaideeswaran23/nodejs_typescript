import express from "express";
import postsRouter from "./routes/posts";
import usersRouter from "./routes/users";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/posts", postsRouter);
app.use("/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port - http://localhost:${PORT}`);
})