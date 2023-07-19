import { Axios } from "axios";

export default class HttpClient {
	private static INSTANCE: Axios;

	static getClient(): Axios {
		if (this.INSTANCE == null) {
			this.INSTANCE = new Axios({
				baseURL: "https://64b7e23621b9aa6eb07936ca.mockapi.io",
				headers: {},
			});
		}
		return this.INSTANCE;
	}
}
