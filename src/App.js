import {Home} from "./Home";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {Header} from "./shared";
import Categories from "./Categories/Categories";
import Search from "./Search/Search";

function App() {
	return (
		<Router>
			<div>
				<Header/>

				<Switch>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/categories">
						<Categories	/>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
