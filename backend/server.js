const express = require("express");
const cors = require("cors");
const taskRoutes = require("./router/router");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo_tasks", taskRoutes);
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
