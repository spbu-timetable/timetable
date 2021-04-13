import React from "react";
import style from "./style.module.css";

import createTimetable from "./helpers/createTimetable";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactToPrint from "react-to-print";
import Button from "@material-ui/core/Button/Button";
import Print from "@material-ui/icons/Print";
import printStyle from "./pagePrintStyle";

import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

type Props = {
	didGet: boolean;
	items: string[];
	timetable: any;
	headers: string[];
};

const Timetable = (props: Props) => {
	const history = useHistory();

	React.useEffect(() => {
		if (props.items.length === 0) {
			history.goBack();
		}
	}, [props.items, history]);

	const componentRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

	const timetable = props.didGet ? createTimetable(props.timetable, props.items) : [];

	return (
		<div className={style.wrapper}>
			{props.didGet ? (
				<>
					<div className={style.tools}>
						{props.items.length > 1 ? (
							<Typography variant="h5" color="textPrimary" className={style.header}>
								{props.headers[1]}
							</Typography>
						) : (
							<Typography variant="h5" color="textPrimary" className={style.header}>
								{props.headers[0] + " " + props.items[0]}
							</Typography>
						)}
						<ReactToPrint
							copyStyles={false}
							fonts={[
								{
									family: "Roboto",
									source: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
								},
							]}
							pageStyle={printStyle}
							trigger={() => (
								<Button
									className={style.print}
									variant="contained"
									color="secondary"
									startIcon={<Print />}
									disableElevation
								>
									Печать
								</Button>
							)}
							content={() => componentRef.current}
						/>
					</div>
					<div ref={componentRef}>{timetable}</div>
				</>
			) : (
				<CircularProgress color="secondary" />
			)}
		</div>
	);
};

export default Timetable;
