import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import StudentDashboard from "../components/StudentDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import { getItem } from "../redux/localStorage";

const dashboard = () => {
	const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		setHydrated(true);
	}, []);
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
	let role = getItem("role");
	if (role === "admin") {
		return <AdminDashboard />;
	} else if (role === "seller") {
		return <TeacherDashboard />;
	} else {
		return <StudentDashboard />;
	}
};

export default dashboard;
