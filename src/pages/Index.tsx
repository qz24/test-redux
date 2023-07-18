import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../state/store";
import { decrement, increment } from "../state/reducers/counter";

const IndexPage = (props) => {
	const dispatch = useDispatch();

	const state = useSelector((state: StoreState) => state.counter);

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div>
			<h1>Hello World</h1>
			<div>
				<p>CLick to update the counter</p>
				<p>Counter: {state.counter}</p>
				<button onClick={handleIncrement}>Increment!</button>
				<button onClick={handleDecrement}>Decrement!</button>
			</div>
		</div>
	);
};

export default IndexPage;
