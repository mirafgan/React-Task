import {Avatar, Box, Container, Typography} from "@mui/material";
import {useContext} from "react";
import {Context} from "../../data/context";
import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";

function Content() {
	const data = useContext(Context);
	const {id} = useParams();
	const vac = data.filter((v) => v.id === Number(id));
	return (
		<>
			<Container maxWidth="md">
				{vac.map((v) => {
					return (
						<Box
							key={nanoid()}
							sx={{height: "100vh", overflow: "auto", p: "10px 0 20px 0"}}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									pb: "15px",
									borderBottom: "1px solid #eaeaea",
									mb: "20px",
								}}>
								<Avatar
									sx={{
										bgcolor: `rgb(${Math.floor(
											Math.random() * 255
										)},${Math.floor(Math.random() * 255)},${Math.floor(
											Math.random() * 255
										)})`,
										marginRight: "1rem",
									}}>
									{v.relationships.employer.data.name[0]}
								</Avatar>
								<Typography
									variant="h3"
									sx={{fontSize: "1rem", color: "rgba(0,0,0,.5)"}}>
									{v.relationships.employer.data.name +
										"  -  " +
										v.attributes.location}
								</Typography>
							</Box>
							<Box>
								<Typography
									variant="h3"
									sx={{fontSize: "1.2rem", fontWeight: "600"}}>
									{v.attributes.title}
								</Typography>
								<p
									dangerouslySetInnerHTML={{__html: v.attributes.description}}
								/>
								<Typography variant="body1"></Typography>
								<Box>
									<Typography component={"span"} sx={{fontWeight: 600}}>
										Contact:
									</Typography>
									<Typography component={"span"}>
										{v.attributes.contact}
									</Typography>
								</Box>
								<Box>
									<Typography
										variant="body1"
										color="initial"
										sx={{fontWeight: 600}}>
										Updated date:
									</Typography>
									<Typography component={"span"}>
										{new Date(v.attributes["updated_at"]).toLocaleString()}
									</Typography>
								</Box>
							</Box>
						</Box>
					);
				})}
			</Container>
		</>
	);
}

export default Content;
