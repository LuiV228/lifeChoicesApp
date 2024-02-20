import { createPool } from "mysql";
// import { config } from "dotenv";
import { config } from "dotenv"
config();
// console.log( process.env.DB_HOST, process.env.DB_Name, process.env.DB_UserName, process.env.DB_UserPass )

let connection = createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_Name,
  user: process.env.DB_UserName,
  password: process.env.DB_UserPass,
  multipleStatements: true,
  connectionLimit: 30,
});
export { connection };
