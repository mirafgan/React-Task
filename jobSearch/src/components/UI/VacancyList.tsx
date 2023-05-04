import {
	Avatar,
	Box,
	Grid,
	IconButton,
	List,
	ListItem,
	Typography,
    Link
} from "@mui/material";
import {Favorite, VisibilityOutlined} from "@mui/icons-material";
import {useMemo, useState} from "react";
import { Link as RouterLink } from "react-router-dom";
interface Vacancy {
    id: number;
	title: string;
	date: string;
	employer: string;
}
function VacancyList({id,title, date, employer}: Vacancy) {
	const [fav, setFav] = useState(false);
	return (
		<Link component={RouterLink} to={`/job/${id}`} sx={{color:'inherit',textDecoration: 'none'}}> 
			<ListItem
				sx={{
					// justifyContent: "space-between",
					transition: ".3s linear",
					cursor: "pointer",
					"&:hover": {background: "#fafafa"},
				}}>
				<Grid item xs={8}>
					<Box sx={{display: "flex", alignItems: "center"}}>
						{useMemo(
							() => (
								<Avatar
									sx={{
										bgcolor: `rgb(${Math.floor(
											Math.random() * 255
										)},${Math.floor(Math.random() * 255)},${Math.floor(
											Math.random() * 255
										)})`,
										marginRight: "1rem",
									}}>
									{employer[0]}
								</Avatar>
							),
							[title]
						)}

						<Box>
							<Typography
								variant="h3"
								sx={{
									fontSize: "1rem",
									fontWeight: "600",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
									maxWidth: "280px",
								}}>
								{title}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: ".8rem",
									color: "rgba(0,0,0,.5)",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
									maxWidth: "150px",
								}}>
								{employer}
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<List sx={{display: "flex", justifySelf: "flex-end"}}>
						<ListItem sx={{pr: 0}}>
							<Box
								sx={{
									color: "rgba(0,0,0,.5)",
									display: "flex",
									alignItems: "center",
									fontSize: ".7rem",
								}}>
								<VisibilityOutlined sx={{pr: "5px", fontSize: "1.2rem"}} />
								413
							</Box>
						</ListItem>
						<ListItem sx={{pr: 0}}>
							<Typography
								sx={{
									width: "max-content",
									color: "rgba(0,0,0,.5)",
									fontSize: ".7rem",
									borderRight: "1px solid #eaeaea",
									borderLeft: "1px solid #eaeaea",
									px: "10px",
								}}>
								{new Date(date).toLocaleString("default", {
									day: "2-digit",
									month: "short",
								})}
							</Typography>
						</ListItem>
						<ListItem sx={{pl: "10px"}}>
							<Box
								sx={{
									color: "rgba(0,0,0,.5)",
									display: "flex",
									alignItems: "center",
									fontSize: ".7rem",
								}}>
								<IconButton
									sx={{
										"&:focus span": {
											background: "transparent",
										},
										"&:hover": {
											background: "transparent",
										},
										pl: 0,
									}}
									onClick={() => setFav(!fav)}>
									<Favorite
										sx={{
											fontSize: "20px",
											cursor: "pointer",
											color: `${fav ? "#ff8686" : "transparent"}`,
											transition: ".3s linear",
											stroke: `${fav ? "transparent" : "#d6d6d6"}`,
											"&:hover": {
												color: "#ff8686",
												stroke: "transparent",
											},
										}}
									/>
								</IconButton>
							</Box>
						</ListItem>
					</List>
				</Grid>
			</ListItem>
		</Link>
	);
}

export default VacancyList;
