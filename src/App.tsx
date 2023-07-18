import "./App.css";
import { Provider } from "react-redux";
import store from "./state/store";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
