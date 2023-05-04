import {useState} from "react";
import {Work, Business, Interests, Factory} from "@mui/icons-material/";
import {
	Select,
	MenuItem,
	SelectChangeEvent,
	Box,
	FormControl,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import {nanoid} from "nanoid";
function Sidebar() {
	const [lang, setLang] = useState("AZ");
	const handleChange = (event: SelectChangeEvent) => {
		setLang(event.target.value);
	};
	const listData = [
		{icon: <Work />, name: "Elanlar"},
		{icon: <Interests />, name: "Kateqoriyalar"},
		{icon: <Factory />, name: "Sənaye"},
		{icon: <Business />, name: "Şirkətlər"},
	];
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				borderRight: "1px solid #eaeaea",
				pr: "15px",height: "100vh",
			}}>
			<Box sx={{display: "flex", alignItems: "center", gap: "30px", py: 1}}>
				<img src="assets/logo.svg" alt="logo" />
				<FormControl sx={{maxWidth: 70, userSelect: "none"}}>
					<Select
						value={lang}
						onChange={handleChange}
						inputProps={{"aria-label": "Without label"}}
						sx={{
							height: 30,
							userSelect: "none",
							fontSize: ".8rem",
						}}>
						<MenuItem value="AZ" sx={{fontSize: ".8rem"}}>
							AZ
						</MenuItem>
						<MenuItem value="EN" sx={{fontSize: ".8rem"}}>
							EN
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box sx={{mt: "15px"}}>
				<List>
					{listData.map((item) => (
						<ListItem
							key={nanoid()}
							sx={{
								"&:hover": {
									backgroundColor: "#0c4dde",
									color: "#fff",
								},
								transition: ".3s linear",
								cursor: "pointer",
								borderRadius: "5px",
								mb: "5px",
							}}>
							{item.icon}
							<Typography
								component="span"
								sx={{
									fontSize: ".9rem",
									fontWeight: 500,
									pl: "10px",
								}}>
								{item.name}
							</Typography>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);
}

export default Sidebar;
