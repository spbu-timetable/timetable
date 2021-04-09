import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import Header from "../Header/container";
import Footer from "../Footer";

function App() {
	return (
		<div className={style.app}>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
