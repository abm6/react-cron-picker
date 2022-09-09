import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers";

const Timepicker = () => {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justifyContent="space-around">
				<KeyboardTimePicker
					margin="normal"
					id="time-picker"
					label="Time picker"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change time",
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
};

export default Timepicker;