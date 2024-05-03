import express from 'express';

//   Importing Routes
import userRoute from "./routes/user.js";



const port = 4000;

const app = express();

//   Using Routes
app.use("/api/v1/user", userRoute);

// app.get("/users", (req, res) => {
//     res.send("asdfds");
// });

// app.get("/product", (req, res) => {
//     res.send("asdfds");
// });

app.listen(port,()=>{
    console.log(`Server os working on http://localhost:${port}`);
    
})