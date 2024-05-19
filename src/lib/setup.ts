import { config } from "dotenv";

export async function setup() {
  config({ path: "../.env" });
  console.log(process.env);
}
