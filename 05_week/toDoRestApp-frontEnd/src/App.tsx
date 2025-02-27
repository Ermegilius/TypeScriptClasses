import { useState, useEffect } from "react";

import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import goalsImg from "./assets/goals.jpg";

export type CourseGoal = {
	title: string;
	description: string;
	_id: string;
};

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	useEffect(() => {
		async function fetchTodos() {
			const response = await fetch("/todos");
			const result = await response.json();
			setGoals(result.data);
		}
		fetchTodos();
	}, []);

	async function handleAddGoal(goal: string, summary: string) {
		const response = await fetch("/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: goal, description: summary }),
		});

		if (response.ok) {
			const result = await response.json();
			if (result.data?._id) {
				// Update the state immediately with the new goal from the backend.
				setGoals((prevGoals) => [...prevGoals, result.data]);
			} else {
				// Fallback: if the backend doesn't return a valid _id, re-fetch the full list.
				fetchTodos();
			}
		} else {
			console.error("Failed to add goal");
		}
	}

	// Separate out fetchTodos so it can be reused.
	async function fetchTodos() {
		const response = await fetch("/todos");
		const result = await response.json();
		setGoals(result.data);
	}

	async function handleDeleteGoal(id: string) {
		const response = await fetch(`/todos/${id}`, {
			method: "DELETE",
		});
		if (response.ok) {
			setGoals((prevGoals) => prevGoals.filter((goal) => goal._id !== id));
		} else {
			console.error("Failed to delete goal");
		}
	}

	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>Your Goals</h1>
			</Header>
			<NewGoal onAddGoal={handleAddGoal} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	);
}
