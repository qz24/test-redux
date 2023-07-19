import prodConfig from "./prod.json";
import devConfig from "./prod.json";

const MODE: "dev" | "prod" = "dev";

let config: typeof prodConfig | typeof devConfig;

config = MODE === "prod" ? prodConfig : devConfig;

export default config;
