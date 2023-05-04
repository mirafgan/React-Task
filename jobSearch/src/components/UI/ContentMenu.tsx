import {Box, List, Typography} from "@mui/material";
import {FormControl, Input} from "@mui/joy";
import {FilterAltRounded, Search} from "@mui/icons-material";
import {useContext} from "react";
import {Context} from "../../data/context";
import VacancyList from "./VacancyList";

function ContentMenu() {
	const data = useContext(Context);
	return (
		<Box
			sx={{
				borderRight: "1px solid #eaeaea",
				height: "100vh",
				overflowY: "auto",
				overflowX: "hidden",
			}}>
			<FormControl>
				<Input
					placeholder="Şirkət üzrə axtar"
					variant="plain"
					sx={{
						"&::before": {
							boxShadow: "none !important",
						},
						"& > input::placeholder": {
							color: "#0c4dde",
							opacity: 1,
							fontSize: ".9rem",
						},
					}}
					endDecorator={
						<>
							<Search sx={{cursor: "pointer", color: "#7f7f7f", mr: "10px"}} />
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									color: "#0c4dde",
									px: "10px",
									borderLeft: "1px solid #eaeaea",
									cursor: "pointer",
								}}>
								<FilterAltRounded sx={{fontSize: "1.1rem"}} />
								<Typography sx={{fontSize: ".8rem", pl: "5px"}}>
									Filterlər
								</Typography>
							</Box>
						</>
					}
				/>
			</FormControl>
			<List>
				{data.map((v) => (
					<VacancyList
						key={v.id}
						title={v.attributes.title}
						date={v.attributes["updated_at"]}
						id={v.id}
						employer={v.relationships.employer.data.name}
					/>
				))}
			</List>
		</Box>
	);
}

export default ContentMenu;
