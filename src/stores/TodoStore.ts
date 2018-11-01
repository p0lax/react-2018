import { observable, computed } from 'mobx';

export interface ITask {
	task: string;
	completed: boolean;
	assignee: string;
}

class Todo {
	@observable private todos: ITask[] = [{ task: '1', completed:false, assignee: '1' }];

	@computed get completedTodosCount() {
		return this.todos.filter(
			todo => todo.completed === true
		).length;
	}

	// @computed get report() {
	// 	if (this.todos.length === 0) {
	// 		return "<none>"
	// 	};
	// 	return `Next todo: "${this.todos[0].task}". ` +
	// 		`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	// }

	@computed 
	get list() {
		return this.todos;
	}

	public addTodo(task: string) {
		this.todos.push({
			task,
			completed: false,
			assignee: ''
		});
	}
}

export default Todo;