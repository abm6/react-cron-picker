import React, { useState } from "react";
import HourSelector from "./HourSelector.comp";
import { TextField } from "@material-ui/core";

function App() {
	const [cronHour, setCronHour] = useState(0);

	function handleCronHourChange(hrs) {
		setCronHour(hrs);
	}

	return (
		<div className="App">
			<h2>Select when we should mail you the reports daily</h2>
			<h3>24Hour Format : {cronHour}</h3>
      
			<h3>24Hour Format after subrtacting IST :{(cronHour + 24 - 5) % 24}</h3>
			<h3>Cron String: 30 {(cronHour + 24 - 5) % 24} * * * </h3>
			<HourSelector updateCronHour={handleCronHourChange} />
		</div>
	);
}

export default App;
