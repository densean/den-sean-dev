import { useQuery } from "@tanstack/react-query";
import { mockDashboardData } from "../data/dashboardData";

const getDashboardDetails = async () => {
	await new Promise((res) => setTimeout(res, 1000));
	return mockDashboardData;
};

export const useDashboardQuery = () => {
	return useQuery({
		queryKey: ["dashboard"],
		queryFn: getDashboardDetails,
	});
};
