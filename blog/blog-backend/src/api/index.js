import Router from "koa-router";
import posts  from './posts';
import auth from "./auth/index";

const api = new Router();

api.use("/posts", posts.routes());
api.use("/auth", auth.routes());
//라우트 내보내기
export default api;
