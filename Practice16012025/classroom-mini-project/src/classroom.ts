export function getNumberOfGrades(grades: number[]): number {
	return grades.length;
}

export function getSumGrades(grades: number[]): number {
	const sum = grades.reduce((acc, num) => acc + num, 0);
	return sum;
}

export function getAverageValue(grades: number[]): number {
	const average = getSumGrades(grades) / getNumberOfGrades(grades);
	return average;
}

export function getPassingGrades(grades: number[]): number[] {
	return grades.filter((grade) => grade >= 10);
}

export function getFailingGrades(grades: number[]): number[] {
	return grades.filter((grade) => grade < 10);
}

export function getRaisedGrades(grades: number[]): number[] {
	return grades.map((grade) => (grade !== 20 ? grade + 1 : grade));
}
