import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../components/UI/MainLayout.tsx";
import Content from "../components/UI/Content.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route path="/job/:id" element={<Content />} />
		</Route>
	)
);

function Routing() {
	return <RouterProvider router={router} />;
}

export default Routing;
