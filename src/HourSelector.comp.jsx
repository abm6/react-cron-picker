import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const HourSelector = (props) => {
	const classes = useStyles();
	const [hour, setHour] = useState(12);
	const [ampm, setAmpm] = useState("AM");

	const updateHours = (newHour, newAmpm) => {
		if (newAmpm === "AM") {
			props.updateCronHour(newHour % 12);
		} else {
			let newCronHour = newHour === 12 ? 12 : newHour + 12;
			props.updateCronHour(newCronHour);
		}
	};

	const handleAmpm = (event, newAmpm) => {
		updateHours(hour, newAmpm);
		setAmpm(newAmpm);
	};

	const handleHoursChange = (event) => {
		updateHours(event.target.value, ampm);
		setHour(event.target.value);
	};

	return (
		<div>
			<Grid container className={classes.root} spacing={5}>
				<Grid item xs={2}>
					<InputLabel id="hourSelectorLabel">Hour</InputLabel>
					<Select
						labelId="hourSelectorLabel"
						id="hourSelector"
						value={hour}
						onChange={handleHoursChange}
						label="Hour">
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={7}>7</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={9}>9</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={11}>11</MenuItem>
						<MenuItem value={12}>12</MenuItem>
					</Select>
				</Grid>
				<Grid item xs={2}>
					<ToggleButtonGroup
						value={ampm}
						exclusive
						onChange={handleAmpm}
						aria-label="text alignment">
						<ToggleButton value="AM" aria-label="AM">
							<div>AM</div>
						</ToggleButton>
						<ToggleButton value="PM" aria-label="PM">
							<div>PM</div>
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
			</Grid>
		</div>
	);
};

export default HourSelector;
