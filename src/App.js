import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {Header} from "./shared";
import Categories from "./Categories/Categories";
import Search from "./Search/Search";
import TopNews from "./News/TopNews";

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
						<TopNews />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
