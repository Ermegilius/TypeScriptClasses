import express, { RequestHandler } from "express";
import { Todo } from "../model/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;

	const newTodo = new Todo(Math.random().toString(), text);
	TODOS.push(newTodo);

	res.status(200).json({ message: "Created the todo", createTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
	res.json({ todos: TODOS });
};

export const patchTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const todoId = req.params.id;
	const updatedText = (req.body as { text: string }).text;
	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

	if (todoIndex < 0) {
		throw new Error("Index not found");
	}
	TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
	res.json({ message: "Updated todo", updateTodo: TODOS[todoIndex] });

	res.json({ todos: TODOS });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const todoId = req.params.id;
	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
	if (todoIndex < 0) {
		throw new Error("Index not found");
	}
	TODOS.splice(todoIndex, 1);
	res.json({ message: "Deleted todo" });
	res.json({ todos: TODOS });
};
