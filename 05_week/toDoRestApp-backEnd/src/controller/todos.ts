import { RequestHandler } from "express";
import mongoose from "mongoose";
import Todo, { TodoModel } from "../model/todo";

export const createTodo: RequestHandler = async (req, res, next) => {
	try {
		const data: TodoModel = req.body;
		await Todo.create(data);
		res.status(200).json({ message: "Todo created successfully", data });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const getTodos: RequestHandler = async (req, res, next) => {
	try {
		let todos = await Todo.find({});
		return res.status(200).json({ message: "All todos", data: todos });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

export const updateTodo: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		let todos = await Todo.findByIdAndUpdate(id, req.body, { new: true });
		return res.status(200).json({ message: "Todo updated successfully", data: todos });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: "Invalid ID format" });
		}
		let isDeleted = await Todo.findByIdAndDelete(id);
		if (!isDeleted) throw new Error("Failed to delete todo!");
		return res.status(200).json({ message: "Todo deleted successfully!" });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
