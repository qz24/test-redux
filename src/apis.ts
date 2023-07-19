import HttpClient from "./utils/http";

export default {
	fetchUsers: () =>
		HttpClient.getClient()
			.get("/users", {})
			.then((response) => {
				return response.data;
			}),
};
