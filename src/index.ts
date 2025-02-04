import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import classifyNumberRoutes from "./routes/classifyNumberRoutes";

// load environment variables
dotenv.config();

const app = express();
// configure cross-origin resource sharing
const corsOptions = {
    origin: '*',
    methods: 'GET',
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// parse JSON payloads
app.use(express.json());

// define routes
app.use("/api", classifyNumberRoutes);

const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
