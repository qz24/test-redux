import dotenv from "dotenv";
import prodConfig from "./prod.json";
import devConfig from "./prod.json";

dotenv.config();

let config: typeof prodConfig | typeof devConfig;

config = process.env.MODE === "prod" ? prodConfig : devConfig;

export default config;
