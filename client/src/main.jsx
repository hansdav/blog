import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./pages/layouts/MainLayout";
import ContentPage from "./pages/ContentPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [{ path: "", element: <ContentPage /> }],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
