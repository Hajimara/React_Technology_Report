require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";

import api from "./api";
// import createFakeData from "./createFakeData";

const app = new Koa();
const router = new Router();

const { PORT, MONGO_URI} = process.env;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false})
.then(()=>{
    console.log('Connected to MongoDB');
    // createFakeData();
}).catch(e=>{
    console.error(e);
})

// 라우터 설정
router.use("/api", api.routes()); //api 라우트 적용

// 라우터 적용 전 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
const port = PORT || 4000;
app.listen(port, () => {
  console.log("Listen to part %d", port);
});
