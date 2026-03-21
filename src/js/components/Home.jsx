import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Light } from "./Light";

//create your first component
const Home = () => {
	// (condition) ? return if true : return if false
	// 5 == "5" -> true, 0 == false -> true, 5 === "5" -> false
	// a statement is executed but it does not become a value
	// en expression is something that can and will become a value
	// setState(newValue);
	const [count, setCount] = useState(0);
	const [currentActiveLight, setCurrentActiveLight] = useState("yellow");
	const lights = ["red", "yellow", "green"];

	// useEffect(() => {}, [])
	useEffect(() => {
		console.log(">>> 🤡 hello");
	}, []);

	useEffect(() => {
		console.log(">>> 😎 running side effect, current light is", currentActiveLight);
		setTimeout(() => {
			console.log(">>> 🧙🏽‍♂️ running interval callback, current light is", currentActiveLight);
			// setState((previous) => value)
			setCurrentActiveLight((currentColor) => {
				if (currentColor === "red") {
					return "yellow";
				}
				if (currentColor === "yellow") {
					return "green";
				}
				return "red";
			});
		}, 5000);
	}, [currentActiveLight]);

	useEffect(() => {
		console.log(">>> 🌞 I always run!");
	});

	useEffect(() => {
		console.log(">>> ⚡ this is count:", count);
	}, [count]);

	return (
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="d-flex flex-column align-items-center">
					<div className="vertical-support"></div>
					<div className="traffic-light">
						{lights.map((light, index) => {
							return <Light
								key={index}
								color={light}
								on={currentActiveLight === light}
								setCurrentActiveLight={setCurrentActiveLight}
							/>
						})}

					</div>
				</div>
			</div>
			<div className="row">
				<div className="d-flex flex-column w-100">
					{/* <button onClick={(event) => setCount((currentCount) => currentCount + 1)}>Add one</button> */}
					<button onClick={(event) => setCount(count + 1)}>Add one</button>
					<p>{count}</p>
				</div>
			</div>
		</div>
	);
};

export default Home;