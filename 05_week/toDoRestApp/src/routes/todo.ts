import { Router } from "express";
import { createTodo, deleteTodo, getTodo, patchTodo } from "../controller/todos";

const router = Router();

router.get("/", getTodo);
router.post("/", createTodo);
router.patch("/:id", patchTodo);
router.delete("/:id", deleteTodo);

export default router;
