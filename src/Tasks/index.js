import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
	<ul className="tasksList">
		{tasks.map(task => (
			<li
				key={task.id}
				className={`tasksList__task ${task.done && hideDone ? "taskList__taskDone--hiden" : ""}`}
			>
				<button className="tasksList__buttonStatus tasksList__button">
					{task.done ? "✔" : ""}
				</button>
				<p className={`tasksList__taskContent ${task.done ? "tasksList__taskContent--done" : ""}`}>
					{task.content}
				</p>
				<button
				 className="tasksList__buttonRemove tasksList__button"
				 onClick={() => removeTask(task.id)}
				 >️️
					&#x1F5D1;
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;