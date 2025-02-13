import express, { RequestHandler } from "express";
import { Todo } from "../model/todo";

export const createTodo: RequestHandler = (req, res, next) => {
	const TODOS: Todo[] = [];
	const text = (req.body as { text: string }).text;

	const newTodo = new Todo(Math.random().toString(), text);
	TODOS.push(newTodo);

	res.status(200).json({ message: "Created the todo", createTodo: newTodo });
};
