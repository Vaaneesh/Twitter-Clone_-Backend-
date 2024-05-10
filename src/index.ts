import express from "express";
import cors from "cors";
import userRoute from "./routes/user";
import loginRoute from "./routes/login";
import tweetRoute from "./routes/tweet";
import likeRoute from "./routes/like";
import retweetRoute from "./routes/retweet";

import cookieParser from "cookie-parser";
const app =express();
const PORT =3000;
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.set("view engine","hbs");
app.get("/",(req,res)=>{
     res.render("home");
})

//routes
app.use("/user", userRoute);
app.use("/tweet",tweetRoute);
app.use("/login",loginRoute)
app.use("/likes",likeRoute);
app.use("/retweet",retweetRoute);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})