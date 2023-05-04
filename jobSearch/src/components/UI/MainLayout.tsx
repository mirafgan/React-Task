import {Grid, Container} from "@mui/material";
import Sidebar from "./Sidebar";
import ContentMenu from "./ContentMenu";
import Content from "./Content";
import { Outlet } from "react-router-dom";

function MainLayout() {
	return (
		<Container maxWidth="xl" sx={{px: "0",height:'100vh'}}>
			<Grid container >
				<Grid item xs={2}>
					<Sidebar />
				</Grid>
				<Grid item xs={5}>
					<ContentMenu />
				</Grid>
				<Grid item xs={5}>
					<Outlet />
				</Grid>
			</Grid>
		</Container>
	);
}

export default MainLayout;
