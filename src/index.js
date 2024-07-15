import express from "express";
import { PORT } from "./config.js"
import Routes from "./routes/users.routes.js"

const app = express();

app.use(express.json()); // para que se pueda entender en su formato json como el req.body
app.use(Routes);

app.listen(PORT);

console.log('Server on port ', PORT);