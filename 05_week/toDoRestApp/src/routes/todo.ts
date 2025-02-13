import { Router } from "express";
import { createTodo } from "../controller/todos";

const router = Router();

router.get("/");
router.post("/", createTodo);
router.patch("/:id");
router.delete("/:id");

export default router;
