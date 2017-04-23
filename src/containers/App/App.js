import React from "react";
import styles from "./App.css";

import LessonContent from "../../components/LessonContent/LessonContent";

const App = () => (
	<div className={styles.app}>
		<div className={styles.header}><span>Code</span>Companion</div>
		<div className={styles.main}>
			<div className={styles.sidebar}>Sidebar</div>
			<div className={styles.content}>
				<LessonContent />
			</div>
		</div>
		<div className={styles.footer}>
			Made with ⚡️ Electron and ❤️ by
			<a href="https://github.com/hamstu" target="_blank">@hamstu</a> and
			<a href="https://github.com/brwong" target="_blank">@brwong</a>
		</div>
	</div>
);

export default App;
