import express, { RequestHandler } from "express";

export class Todo {
	constructor(public id: string, public text: string) {}
}
