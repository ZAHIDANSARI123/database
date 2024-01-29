import express from "express";
import userController from './controller/user.controller'
const app = express();
const port = process.env.PORT || 3033;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userController);
// app.get("/", (req: Request, res: Response) => {
//     res.status(200).json("hello, jahid ansari");
// });

app.listen(port, () => console.log(`Server is runing on ${port}`));