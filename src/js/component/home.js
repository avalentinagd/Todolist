import React, { Fragment, useState } from "react";

//create your first component
export function Home() {
	const [taskList, setTaskList] = useState([]);

	const addTask = e => {
		if (e.key === "Enter") {
			console.log(e.target.value);
			setTaskList([...taskList, e.target.value]);
		}
	};
	console.log(taskList);

	const createUser = () => {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/avalentinagd"),
			{
				method: "POST",
				mode: "cors",
				redirect: "follow",
				headers: new Headers({
					"Content-Type": "text/plain"
				}).then(function() {
					/* manejar la respuesta */
				})
			};
	};

	const ChangeUser = () => {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/avalentinagd"),
			{
				method: "PUT",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				}
			}
				.then(res => res.json())
				.then(response =>
					console.log("Success:", JSON.stringify(response))
				)
				.catch(error => console.error("Error:", error));
	};

	//function endTask(index){
	//const newtaskList = taskList.filter((index) => index !== id);

	//setTaskList(newtaskList);

	//{taskList.map((theTask, index) => {
	//							return <li key={index}>{theTask}</li>;
	//						})}
	//<button type="button" onClick={() => endTask(index)}>x</button>
	//}

	return (
		<Fragment>
			<div className="row title container-fluid">
				<h1>Todos</h1>
			</div>
			<div className="container ">
				<div className="row taskList container mx-auto">
					<input
						className="enterTask"
						placeholder="Enter your task"
						onKeyPress={e => addTask(e)}
					/>

					<div className="row task container mx-auto border">
						<ol className="col-12">
							{taskList.map((theTask, index) => {
								return <li key={index}>{theTask}</li>;
							})}
						</ol>
					</div>
					<div className="row footer">N Items left</div>
				</div>
			</div>
		</Fragment>
	);
}
